import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, Send, Play, Download, Video, CheckCircle2, AlertCircle } from 'lucide-react';
import { planErrand } from '../services/geminiService';
import { ErrandPlan } from '../types';
import { GoogleGenAI } from "@google/genai";

const SUGGESTIONS = [
  { tag: "Grocery Shopping", description: "Full grocery management from selection to your kitchen counter." },
  { tag: "Key Pickup", description: "Secure and trackable handover of keys across the city." },
  { tag: "Gift Concierge", description: "Bespoke gift sourcing, elegant wrapping, and timely delivery." },
  { tag: "Office Supplies", description: "Immediate restock of essential hardware and stationery." }
];

const LOADING_MESSAGES = [
  "Crafting your custom promo...",
  "Visualizing the Nibbo experience...",
  "Our creative AI is hard at work...",
  "Almost ready to show you the magic...",
  "Adding the final polish to your video..."
];

export const SmartAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ErrandPlan | null>(null);
  
  // Video Generation States
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    let interval: number;
    if (isGeneratingVideo) {
      interval = window.setInterval(() => {
        setLoadingMsgIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isGeneratingVideo]);

  const handlePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setVideoUrl(null);
    setVideoError(null);
    try {
      const plan = await planErrand(query);
      setResult(plan);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!result) return;
    
    try {
      // 1. Check for API Key
      if (!(await (window as any).aistudio.hasSelectedApiKey())) {
        await (window as any).aistudio.openSelectKey();
        // Proceeding as per instructions: assume selection successful
      }

      setIsGeneratingVideo(true);
      setVideoError(null);
      setVideoUrl(null);

      // 2. Initialize AI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const videoPrompt = `A high-quality, professional promotional video for Nibbo delivery service. 
      The video should visualize the following errand being completed with speed and care: "${result.summary}". 
      Show a friendly Nibbo Champion in a green and orange uniform handling the task efficiently. 
      Modern urban aesthetics, vibrant lighting, and a sense of relief for the customer.`;

      // 3. Start Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: videoPrompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      // 4. Poll for Completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        try {
          operation = await ai.operations.getVideosOperation({ operation: operation });
        } catch (e: any) {
          if (e.message?.includes("Requested entity was not found")) {
            await (window as any).aistudio.openSelectKey();
            throw new Error("API Key selection needed. Please try again.");
          }
          throw e;
        }
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const fetchUrl = `${downloadLink}&key=${process.env.API_KEY}`;
        setVideoUrl(fetchUrl);
      } else {
        throw new Error("Video generation failed to return a link.");
      }
    } catch (err: any) {
      console.error("Video Gen Error:", err);
      setVideoError(err.message || "Something went wrong while generating the video.");
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <section id="nibbo-go-planner" className="py-24 bg-[#0F3D2E] text-white overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <circle cx="100" cy="0" r="50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange-200 text-sm font-bold mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-[#F7941D]" />
              Powered by Nibbo AI
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Plan complex errands <br /> in seconds.
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-lg leading-relaxed">
              Don't know how to get things done? Just describe your errand and let Nibbo AI figure out the logistics for you.
            </p>
            
            <form onSubmit={handlePlan} className="relative max-w-lg">
              <input 
                id="errand-input"
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Pick up my dry cleaning and get a birthday gift..." 
                className="w-full bg-white/10 border border-white/20 text-white placeholder-green-200 rounded-3xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#F7941D] backdrop-blur-md"
              />
              <button 
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 px-6 nibbo-gradient rounded-2xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
              </button>
            </form>

            <div className="mt-10 flex flex-wrap gap-3">
              {SUGGESTIONS.map((item) => (
                <div key={item.tag} className="relative group/tooltip">
                  <button 
                    onClick={() => setQuery(item.tag)}
                    className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 hover:border-white/30 text-xs font-semibold transition-all active:scale-95 whitespace-nowrap"
                  >
                    {item.tag}
                  </button>
                  
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 bg-white text-[#0F3D2E] text-[11px] rounded-xl opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-300 w-56 shadow-2xl z-20 text-center font-bold leading-tight transform translate-y-1 group-hover/tooltip:translate-y-0">
                    {item.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-500 ${result || loading ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
             {result && !loading && (
               <div className="bg-white text-slate-900 rounded-[3rem] p-8 shadow-2xl relative">
                  <div className="absolute -top-4 -right-4 bg-[#F7941D] text-white p-4 rounded-3xl shadow-lg">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#F7941D] mb-2">The Game Plan</div>
                    <h3 className="text-2xl font-bold">{result.summary}</h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    {result.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#F7941D] font-bold group-hover:bg-[#0F3D2E] group-hover:text-white transition-colors">
                          {idx + 1}
                        </div>
                        <p className="text-slate-700 leading-snug">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 mb-8">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Estimated Time</div>
                      <div className="text-lg font-bold">{result.estimatedTime}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Service Fee</div>
                      <div className="text-lg font-bold text-[#F7941D]">{result.costEstimate}</div>
                    </div>
                  </div>

                  {/* Video Promo Feature */}
                  <div className="mb-6">
                    {!videoUrl && !isGeneratingVideo && (
                      <button 
                        onClick={handleGenerateVideo}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-orange-50 text-[#F7941D] font-black hover:bg-orange-100 transition-colors border-2 border-dashed border-[#F7941D]/30"
                      >
                        <Video className="w-5 h-5" />
                        Generate AI Promo Video
                      </button>
                    )}

                    {isGeneratingVideo && (
                      <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 border-4 border-[#F7941D]/20 border-t-[#F7941D] rounded-full animate-spin"></div>
                          <Video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#F7941D]" />
                        </div>
                        <p className="font-black text-[#0F3D2E] text-sm animate-pulse">{LOADING_MESSAGES[loadingMsgIdx]}</p>
                        <p className="text-[10px] text-slate-400 mt-2">This usually takes about 2-3 minutes...</p>
                      </div>
                    )}

                    {videoUrl && (
                      <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
                        <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-xl relative group">
                          <video 
                            src={videoUrl} 
                            controls 
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800"
                          />
                          <div className="absolute top-4 left-4 bg-[#F7941D] text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Sparkles className="w-3 h-3" /> NIBBO AI PRODUCTION
                          </div>
                        </div>
                        <div className="flex gap-3">
                           <a 
                             href={videoUrl} 
                             download="nibbo-promo.mp4"
                             className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors"
                           >
                             <Download className="w-4 h-4" /> Download Promo
                           </a>
                           <button 
                             onClick={() => window.open(videoUrl, '_blank')}
                             className="px-6 py-3 bg-slate-100 text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
                           >
                             <Play className="w-4 h-4" />
                           </button>
                        </div>
                      </div>
                    )}

                    {videoError && (
                      <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <div>
                          <p className="font-bold">Generation failed</p>
                          <p className="text-xs opacity-80">{videoError}</p>
                          <button onClick={handleGenerateVideo} className="mt-2 font-black underline text-[10px] uppercase">Try again</button>
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="w-full nibbo-gradient text-white py-5 rounded-3xl font-bold shadow-xl shadow-orange-100 hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95">
                    Proceed with Nibbo Go
                  </button>
               </div>
             )}
             
             {loading && (
               <div className="h-[500px] bg-white text-slate-900 rounded-[3rem] p-8 shadow-2xl flex flex-col items-center justify-center text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 border-[6px] border-slate-100 border-t-[#0F3D2E] rounded-full animate-spin"></div>
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-[#0F3D2E]" />
                  </div>
                  <h3 className="text-2xl font-black mb-2">Optimizing Logistics...</h3>
                  <p className="text-slate-500 max-w-[200px]">Finding the most efficient route for your errand.</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};
