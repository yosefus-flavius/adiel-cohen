const steps = [
  {
    number: "01",
    title: "איסוף מסמכים",
    description: "בשלב זה תישלח אליכם רשימת מסמכים ראשונית ע\"מ שנוכל להגיש בקשה בבנקים השונים.",
  },
  {
    number: "02",
    title: "קבלת אישור עקרוני",
    description: "בשלב זה יתקבל אישור עקרוני מהבנקים שאליהם הוגשה הבקשה.",
  },
  {
    number: "03",
    title: "משא ומתן",
    description: "בשלב זה יועץ המשכנתאות מנהל מו\"מ עם הבנקים ע\"מ שנקבל את ההצעה הטובה ביותר.",
  },
  {
    number: "04",
    title: "חתימות",
    description: "בשעה טובה תחתמו על המשכנתא המצוינת שלכם!",
  },
  {
    number: "05",
    title: "בטחונות",
    description: "על מנת שהכסף יעבור לחשבונכם, הבנק דורש שמאי, ביטוח ועוד.",
  },
  {
    number: "06",
    title: "מזל טוב!",
    description: "יש לכם משכנתא. תהנו מהבית החדש שלכם!",
  },
];

const StepsSections = () => {
  return (
    <section id="steps" className="section-padding bg-background">
      <div className="container-main">
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-sm font-bold text-[var(--color-brand-gold-text)]">התהליך</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">שישה שלבים עד המפתח</h2>
        </div>

        <ol className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-gold)] text-xl font-extrabold text-[#1B1405]">
                  {step.number}
                </span>
                <span aria-hidden="true" className="h-0.5 flex-1 bg-border" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default StepsSections;
