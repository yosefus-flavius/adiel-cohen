import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import mortgageServices from '@/lib/data/services';


const MortgageServicesSection = () => {
   

    return (
        <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--primary-color)] relative inline-block">
                        שירותים מקצועיים
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        אנו מציעים מגוון רחב של שירותי משכנתא מותאמים אישית לצרכים שלכם
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mortgageServices.map((service, index) => (
                        <div 
                            key={service.title}
                            className="transform transition-all duration-300 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Card className="rounded-2xl overflow-hidden border border-amber-100 h-full shadow hover:shadow-xl transition-shadow bg-white">
                                <div className=" h-11 md:h-9 -mt-3 -ml-2 bg-amber-400 -rotate-3"></div>
                                <CardHeader className="pt-6 pb-2 px-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        {service.icon && (
                                            <div className="mr-4 bg-amber-100 p-3 rounded-full">
                                                {service.icon}
                                            </div>
                                        )}
                                        <CardTitle className="text-2xl font-bold text-right text-gray-900">
                                            {service.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="px-6 pb-6">
                                    <p className="text-gray-600 text-right leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    {service.features && (
                                        <ul className="mt-4 space-y-2 text-right">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center justify-start text-gray-700">
                                                    <div className="h-5 w-5 text-amber-600 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="mr-2">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    
                                    {/* {service.ctaText && (
                                        <div className="mt-6 text-right">
                                            <button className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800 transition-colors">
                                                {service.ctaText}
                                                <svg className="w-4 h-4 ml-1 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    )} */}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
                
                {/* <div className="mt-16 text-center">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl">
                        לייעוץ ראשוני חינם
                    </button>
                </div> */}
            </div>
        </section>
    );
};

// For creating simple icon components
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const DocumentTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

export default MortgageServicesSection;