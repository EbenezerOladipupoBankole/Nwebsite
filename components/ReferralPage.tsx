import React, { useState } from 'react';
import { ArrowLeft, Gift, Share2, Copy, Check, Twitter, Mail, MessageSquare, Users, Award, TrendingUp, ChevronDown, ChevronUp, HelpCircle, ChevronRight } from 'lucide-react';

interface ReferralPageProps {
  onBack: () => void;
}

const FAQ_ITEMS = [
  {
    question: "When do I get my ₦2,000 reward?",
    answer: "Your reward is automatically credited to your Nibbo Wallet as soon as your friend completes their first successful delivery order of at least ₦3,000."
  },
  {
    question: "Is there a limit to how many friends I can invite?",
    answer: "Absolutely not! You can invite as many friends as you like. The more people you bring to Nibbo, the more you earn. Some of our top referrers earn over ₦50,000 monthly."
  },
  {
    question: "What do my friends get when they use my link?",
    answer: "Your friends receive a 'Welcome Pack' which includes free delivery on their first 3 orders plus an immediate ₦1,000 discount on their very first meal or grocery basket."
  },
  {
    question: "Does the referral reward expire?",
    answer: "Nibbo Wallet credit earned from referrals stays active for 90 days from the date it was credited. You can use it for any service on the app."
  }
];

export const ReferralPage: React.FC<ReferralPageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const referralCode = "NIBBO-DEINDE-2024";
  const referralLink = `https://nibbo.app/join/${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralStats = [
    { label: "Total Invited", value: "24", icon: <Users className="w-5 h-5" />, gradient: "from-blue-500/20 to-transparent" },
    { label: "Completed Orders", value: "18", icon: <Check className="w-5 h-5" />, gradient: "from-emerald-500/20 to-transparent" },
    { label: "Total Earned", value: "₦45,000", icon: <Award className="w-5 h-5" />, gradient: "from-orange-500/20 to-transparent" },
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: <MessageSquare className="w-5 h-5" />, color: "bg-green-500", action: () => window.open(`https://wa.me/?text=Get free deliveries on Nibbo using my link: ${referralLink}`) },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, color: "bg-sky-500", action: () => window.open(`https://twitter.com/intent/tweet?text=I'm using Nibbo for my errands! Join me: ${referralLink}`) },
    { name: "Email", icon: <Mail className="w-5 h-5" />, color: "bg-orange-500", action: () => window.open(`mailto:?subject=Join Nibbo&body=Check out Nibbo for fast deliveries: ${referralLink}`) },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Main Referral Card */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Gift className="w-64 h-64 text-[#F7941D]" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-sm font-bold">
                  <Gift className="w-4 h-4" /> Share the Love
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-[#0F3D2E] leading-tight">
                  Give ₦2,000, <br /><span className="text-[#F7941D]">Get ₦2,000.</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                  Invite your friends to Nibbo. When they make their first order, they get a discount and you get ₦2,000 in your Nibbo Wallet.
                </p>

                <div className="space-y-4 pt-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Unique Referral Link</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-mono text-slate-700 flex items-center justify-between group">
                      <span className="truncate">{referralLink}</span>
                      <Share2 className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <button 
                      onClick={handleCopy}
                      className={`px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${copied ? 'bg-green-600 text-white' : 'bg-[#0F3D2E] text-white hover:bg-slate-800 shadow-lg shadow-green-900/20'}`}
                    >
                      {copied ? <><Check className="w-5 h-5" /> Copied!</> : <><Copy className="w-5 h-5" /> Copy Link</>}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {socialLinks.map((social) => (
                    <button 
                      key={social.name}
                      onClick={social.action}
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl text-white font-bold transition-transform hover:-translate-y-1 active:scale-95 shadow-md ${social.color}`}
                    >
                      {social.icon}
                      {social.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Send Invite", desc: "Share your link with friends via any platform." },
                { title: "They Order", desc: "Your friend signs up and completes their first delivery." },
                { title: "Earn Reward", desc: "₦2,000 is automatically added to your wallet." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black mx-auto mb-4">{i + 1}</div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Tracking Dashboard */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0F3D2E] rounded-[3rem] p-10 text-white shadow-2xl h-full flex flex-col relative overflow-hidden">
              {/* Animated background pulse */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F7941D] opacity-10 rounded-full blur-[100px] animate-pulse"></div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <TrendingUp className="w-6 h-6 text-[#F7941D]" /> 
                My Earnings
              </h3>
              
              <div className="space-y-6 relative z-10">
                {referralStats.map((stat, i) => (
                  <div 
                    key={i} 
                    className={`bg-gradient-to-br ${stat.gradient} bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between transition-all duration-500 hover:scale-[1.03] hover:bg-white/10 hover:shadow-xl group animate-in fade-in slide-in-from-right-8`}
                    style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 duration-300`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-green-200/50 uppercase tracking-tighter">{stat.label}</div>
                        <div className="text-2xl font-black">{stat.value}</div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-4 h-4 text-[#F7941D]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex-1 relative z-10">
                <h4 className="text-sm font-bold text-green-200/50 uppercase mb-6 tracking-widest">Recent Activity</h4>
                <div className="space-y-4">
                  {[
                    { name: "Segun A.", status: "Earned ₦2,000", time: "2 hours ago" },
                    { name: "Bisi O.", status: "Pending", time: "5 hours ago" },
                    { name: "John D.", status: "Earned ₦2,000", time: "1 day ago" }
                  ].map((activity, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-center text-sm animate-in fade-in slide-in-from-bottom-2"
                      style={{ animationDelay: `${500 + (i * 100)}ms`, animationFillMode: 'both' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-[10px] uppercase">
                          {activity.name.split(' ')[0][0]}{activity.name.split(' ')[1][0]}
                        </div>
                        <div>
                          <div className="font-bold">{activity.name}</div>
                          <div className="text-[10px] text-green-200/40">{activity.time}</div>
                        </div>
                      </div>
                      <div className={`font-black text-[10px] px-2 py-1 rounded-md ${activity.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                        {activity.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-10 bg-white text-[#0F3D2E] py-4 rounded-2xl font-bold hover:bg-green-50 transition-all shadow-lg active:scale-95 relative z-10 hover:shadow-white/10">
                Withdraw to Wallet
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#0F3D2E] font-black uppercase tracking-widest text-sm mb-4">
              <HelpCircle className="w-5 h-5 text-[#F7941D]" /> 
              Have Questions?
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0F3D2E]">Referral Program FAQ</h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-lg font-bold text-slate-800 group-hover:text-[#0F3D2E]">{item.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-[#F7941D]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <div className={`px-8 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-8 opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-100 rounded-[2.5rem] p-10 text-center">
            <p className="text-slate-500 font-bold mb-6">Still have questions about Nibbo Rewards?</p>
            <button className="text-[#0F3D2E] font-black underline underline-offset-8 hover:text-[#F7941D] transition-colors">
              Contact Support 24/7
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
