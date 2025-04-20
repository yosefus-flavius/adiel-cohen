import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface MortgageStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const steps: MortgageStep[] = [
    {
      id: "docs",
      number: "01",
      title: "איסוף מסמכים",
      description: "בשלב זה תישלח אליכם רשימת מסמכים ראשונית ע\"מ שנוכל להגיש בקשה בבנקים השונים."
    },
    {
      id: "approval",
      number: "02",
      title: "קבלת אישור עקרוני",
      description: "בשלב זה יתקבל אישור עקרוני מהבנקים שאליהם הוגשה הבקשה."
    },
    {
      id: "negotiation",
      number: "03",
      title: "משא ומתן",
      description: "בשלב זה יועץ המשכנתאות מנהל מו\"מ עם הבנקים ע\"מ שנקבל את ההצעה הטובה ביותר."
    },
    {
      id: "signing",
      number: "04",
      title: "חתימות",
      description: "בשעה טובה תחתמו על המשכנתא המצוינת שלכם!"
    },
    {
      id: "collateral",
      number: "05",
      title: "בטחונות",
      description: "על מנת שהכסף יעבור לחשבונכם, הבנק דורש שמאי, ביטוח ועוד."
    },
    {
        id: "success",
        number: "06",
        title: "מזל טוב!!! 🥳",
        description: "יש לכם משכנתא."
      }
];

const StepsSections = () => {
  return (
    <section id="steps" className="w-full py-12 md:py-24  max-w-6xl mx-auto p-4 bg-amber-50 min-h-screen">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          השלבים ללקיחת משכנתא
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          אני פועל ומכוון לתהליך ליווי מדויק ומקצועי עד לשלב החתימה בבנק וקבלת הכסף לחשבון.
          אני מאמין בשירות דיגיטלי, אישי ואנושי לחסכון משמעותי!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {steps.map((step) => (
          <Card key={step.id} className="relative">
            <div className="absolute md:-top-2 -top-10 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-10 bg-white shadow-md border rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-4xl md:text-4xl font-bold  text-amber-400">
                {step.number}
              </span>
            </div>
            <CardHeader className="md:pt-20 pt-10">
              <CardTitle className="text-2xl font-bold text-right">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-right">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StepsSections;