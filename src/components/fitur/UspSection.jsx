export default function UspSection({data}) {
    return (
        <div className="usp-section">
            <div className="container-120 mt-6 md:mt-[72px] mb-6 md:mb-9">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-snug lg:!leading-tight text-neutral-900 text-center font-demibold">
                {data.title}
                </h2>
                <div className="grid md:grid-cols-3 md:mt-10 w-full place-items-center">
                
                {/* Item 1 */}
                <div className="flex flex-col h-full items-center text-center p-6">
                    <img 
                    alt="Bayar Tagihan Cepet Baaanget" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    decoding="async" 
                    data-nimg="1" 
                    className="w-28 h-28 md:w-44 md:h-44 object-contain" 
                    style={{ color: 'transparent' }} 
                    src={data.left.image}
                    />
                    <strong className="text-base md:text-2xl font-demibold mt-2 md:mt-6 min-h-0 md:min-h-16 xl:min-h-0">
                    {data.left.title}
                    </strong>
                    <div className="text-sm md:text-base font-light mt-2 md:mt-4 text-charcoal-gray leading-snug flex-grow [&_div]:text-neutral-900">
                    <div className="ql-content-wrapper">
                        <div className="ql-content ql-editor text-black font-normal">
                        {data.left.description}
                        </div>
                    </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col h-full items-center text-center p-6">
                    <img 
                    alt="Anti Lupa Bayar Tagihan" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    decoding="async" 
                    data-nimg="1" 
                    className="w-28 h-28 md:w-44 md:h-44 object-contain" 
                    style={{ color: 'transparent' }} 
                    src={data.center.image}
                    />
                    <strong className="text-base md:text-2xl font-demibold mt-2 md:mt-6 min-h-0 md:min-h-16 xl:min-h-0">
                    {data.center.title}
                    </strong>
                    <div className="text-sm md:text-base font-light mt-2 md:mt-4 text-charcoal-gray leading-snug flex-grow [&_div]:text-neutral-900">
                    <div className="ql-content-wrapper">
                        <div className="ql-content ql-editor text-black font-normal">
                        {data.center.description}
                        </div>
                    </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col h-full items-center text-center p-6">
                    <img 
                    alt="Bayar Apapun Serba Ada" 
                    loading="lazy" 
                    width="0" 
                    height="0" 
                    decoding="async" 
                    data-nimg="1" 
                    className="w-28 h-28 md:w-44 md:h-44 object-contain" 
                    style={{ color: 'transparent' }} 
                    src={data.right.image}
                    />
                    <strong className="text-base md:text-2xl font-demibold mt-2 md:mt-6 min-h-0 md:min-h-16 xl:min-h-0">
                    {data.right.title}
                    </strong>
                    <div className="text-sm md:text-base font-light mt-2 md:mt-4 text-charcoal-gray leading-snug flex-grow [&_div]:text-neutral-900">
                    <div className="ql-content-wrapper">
                        <div className="ql-content ql-editor text-black font-normal">
                        {data.right.description}
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}