export default function FinancialInsights() {
  return (
    <div className="bg-slate-50 min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-6xl font-bold text-black text-center mb-8">
          Insight cermat dari kebiasaan keuangan
        </h1>
        
        <div className="p-4 sm:p-6 md:p-8rounded-2xl bg-white/60 flex justify-center items-center">

          <img 
            src="https://wondr.bni.co.id/api/image/content_1751486086818.png"
            alt="Financial Insights UI" 
            className="rounded-xl w-full h-auto"

            onError={(e) => { 

              e.currentTarget.onerror = null; 
              e.currentTarget.src='https://placehold.co/1100x500/eeeeee/333333?text=Financial+Insights+UI'; 
            }}
          />
        </div>
      </div>
    </div>
  );
}