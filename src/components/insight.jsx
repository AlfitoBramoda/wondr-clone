"use client"; // Good practice for components with client-side interactivity like onError.

export default function InsightSection() {
  return (
    <section className="py-6 xl:px-[200px] md:pt-9 md:pb-[72px] bg-white">
      <div className="px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] !leading-snug lg:!leading-tight text-black text-center font-semibold">
          Insight cermat dari kebiasaan keuangan
        </h1>
      </div>
      <div className="pl-6">
        <div className="w-full mt-6 md:mt-12 overflow-x-auto md:overflow-x-hidden">
          <div className="min-w-[600px]">
            <img 
              alt="insight" 
              src="https://wondr.bni.co.id/api/image/content_1751486086818.png"
              className="w-full h-auto pr-6 md:pr-0"
              onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src='https://placehold.co/1100x500/eeeeee/333333?text=Financial+Insights+UI'; 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
