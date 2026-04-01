import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const onScroll = () => setVisible(window.scrollY > 600);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const scrollToForm = () =>
      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });

   return (
      <AnimatePresence>
         {visible && (
            <motion.div
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 100, opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
            >
               <Button
                  onClick={scrollToForm}
                  size="lg"
                  className="rounded-full px-8 py-5 text-base font-bold shadow-[0_4px_30px_hsl(43_76%_52%/0.4)] transition-all hover:shadow-[0_4px_50px_hsl(43_76%_52%/0.6)]"
               >
                  קבלו את המדריך בחינם!
                  <ArrowDown className="mr-2 h-4 w-4" />
               </Button>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default FloatingCTA;
