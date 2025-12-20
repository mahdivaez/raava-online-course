import { AnimatedSection } from "./AnimatedSection";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BasicFormData {
  fullName: string;
  instagramLink: string;
  phone: string;
}

interface FullFormData extends BasicFormData {
  whyRegister: string;
  goal: string;
  contentArea: string;
  hasAdvertised: string;
  challenges: string;
  favoritePost: string;
  roleModel: string;
  ravaInterest: string;
  satisfiedBrands: string;
  monthlyIncome: string;
}

interface EvaluationFormProps {
  formType: "course-only" | "work-with-rava";
  onBack: () => void;
}

export const EvaluationForm = ({ formType, onBack }: EvaluationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FullFormData>();

  const onSubmit = async (data: BasicFormData | FullFormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const inputClass = "bg-card border-border focus:border-primary text-foreground placeholder:text-muted-foreground";

  if (isSuccess) {
    return <PaymentInfo onBack={() => setIsSuccess(false)} />;
  }

  return (
    <section id="form" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به انتخاب مسیر
          </button>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            {formType === "course-only" ? (
              <>فرم <span className="text-primary">ثبت‌نام</span></>
            ) : (
              <>فرم ارزیابی <span className="text-primary">ورود به دوره</span></>
            )}
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            {formType === "course-only" 
              ? "اطلاعات پایه خود را وارد کنید"
              : "برای شرکت در دوره و بررسی امکان همکاری، لطفاً به سؤال‌های زیر پاسخ دهید."
            }
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
            {/* Section: Basic Info - Both forms */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-primary">اطلاعات پایه</h3>
              <div className="space-y-4">
                <div>
                  <Label>نام و نام خانوادگی *</Label>
                  <Input {...register("fullName", { required: true })} className={inputClass} placeholder="نام کامل خود را وارد کنید" />
                  {errors.fullName && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                </div>
                <div>
                  <Label>شماره تماس (واتساپ) *</Label>
                  <Input {...register("phone", { required: true })} className={inputClass} placeholder="09123456789" dir="ltr" />
                  {errors.phone && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                </div>
                <div>
                  <Label>لینک پیج اینستاگرام / شبکه اجتماعی اصلی *</Label>
                  <Input {...register("instagramLink", { required: true })} className={inputClass} placeholder="https://instagram.com/username" dir="ltr" />
                  {errors.instagramLink && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                </div>
              </div>
            </div>

            {/* Full form sections - Only for work-with-rava */}
            <AnimatePresence>
              {formType === "work-with-rava" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-8"
                >
                  {/* Section: Goals */}
                  <div className="glass rounded-2xl p-6 space-y-6">
                    <h3 className="text-lg font-bold text-primary">انگیزه و هدف</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>چرا می‌خواهید در این دوره ثبت‌نام کنید؟ *</Label>
                        <Textarea {...register("whyRegister", { required: formType === "work-with-rava" })} className={inputClass} rows={3} />
                        {errors.whyRegister && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                      </div>
                      <div>
                        <Label>هدف شما از این مسیر چیست؟ *</Label>
                        <Textarea {...register("goal", { required: formType === "work-with-rava" })} className={inputClass} rows={3} />
                        {errors.goal && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                      </div>
                      <div>
                        <Label>در حال حاضر در چه حوزه‌ای محتوا تولید می‌کنید؟ *</Label>
                        <Textarea {...register("contentArea", { required: formType === "work-with-rava" })} className={inputClass} rows={3} placeholder="یا اگر شروع نکرده‌اید دوست دارید در چه حوزه‌ای فعالیت کنید؟" />
                        {errors.contentArea && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                      </div>
                    </div>
                  </div>

                  {/* Section: Challenges */}
                  <div className="glass rounded-2xl p-6 space-y-6">
                    <h3 className="text-lg font-bold text-primary">وضعیت فعلی پیج و چالش‌ها</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>آیا تا به حال تبلیغات انجام داده‌اید؟ *</Label>
                        <RadioGroup defaultValue="no" className="flex gap-6 mt-2">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id="ad-yes" {...register("hasAdvertised")} />
                            <Label htmlFor="ad-yes">بله</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id="ad-no" {...register("hasAdvertised")} />
                            <Label htmlFor="ad-no">خیر</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label>۳ مورد از چالش‌های اصلی شما در مسیر کاری‌تان چیست؟ *</Label>
                        <Textarea {...register("challenges", { required: formType === "work-with-rava" })} className={inputClass} rows={3} />
                        {errors.challenges && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}
                      </div>
                      <div>
                        <Label>یک پست/محتوا که دوستش دارید لینک کنید و بگویید چرا</Label>
                        <Textarea {...register("favoritePost")} className={inputClass} rows={3} />
                      </div>
                      <div>
                        <Label>دوست دارید در مسیر محتوا شبیه چه فرد تاثیرگذاری شوید؟</Label>
                        <Input {...register("roleModel")} className={inputClass} placeholder="ایرانی یا خارجی" />
                      </div>
                    </div>
                  </div>

                  {/* Section: Collaboration */}
                  <div className="glass rounded-2xl p-6 space-y-6">
                    <h3 className="text-lg font-bold text-primary">تبلیغات و همکاری با راوا</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>آیا علاقه دارید در پروژه‌های تبلیغاتی راوا همکاری کنید؟</Label>
                        <RadioGroup defaultValue="yes" className="flex gap-6 mt-2">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id="rava-yes" {...register("ravaInterest")} />
                            <Label htmlFor="rava-yes">بله</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id="rava-no" {...register("ravaInterest")} />
                            <Label htmlFor="rava-no">خیر</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div>
                        <Label>اگر تجربه تبلیغ داشته‌اید، نام برندهایی که از همکاری با آن‌ها راضی بوده‌اید</Label>
                        <Textarea {...register("satisfiedBrands")} className={inputClass} rows={2} />
                      </div>
                    </div>
                  </div>

                  {/* Section: Income */}
                  <div className="glass rounded-2xl p-6 space-y-6">
                    <h3 className="text-lg font-bold text-primary">درآمد</h3>
                    <div>
                      <Label>درآمد ماهانه از پیج (در صورت تمایل به پاسخ)</Label>
                      <Input {...register("monthlyIncome")} className={inputClass} placeholder="عدد تقریبی یا بازه بنویسید" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full py-7 text-lg glow-primary elegant-border bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin ml-2" />در حال ارسال...</> : "ادامه به پرداخت"}
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Payment Info Component
const PaymentInfo = ({ onBack }: { onBack: () => void }) => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    toast.success("کپی شد!");
    setTimeout(() => setCopied(null), 2000);
  };

  const bankInfo = {
    cardNumber: "6037-9971-1234-5678",
    sheba: "IR12 0170 0000 0012 3456 7890 12",
    accountHolder: "آفرین بنائی",
    bankName: "بانک ملی ایران"
  };

  const whatsappNumber = "09121234567";

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              فرم با موفقیت <span className="text-primary">ثبت شد</span>
            </h2>
            <p className="text-muted-foreground">
              برای تکمیل ثبت‌نام، لطفاً مبلغ دوره را واریز کنید
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass rounded-3xl p-8 space-y-6">

            <h3 className="text-xl font-bold text-center mb-6">اطلاعات پرداخت</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-sm">شماره کارت</span>
                  <button 
                    onClick={() => copyToClipboard(bankInfo.cardNumber.replace(/-/g, ''), 'card')}
                    className="text-primary text-sm hover:underline"
                  >
                    {copied === 'card' ? 'کپی شد!' : 'کپی'}
                  </button>
                </div>
                <p className="font-mono text-lg font-bold tracking-wider" dir="ltr">{bankInfo.cardNumber}</p>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-sm">شماره شبا</span>
                  <button 
                    onClick={() => copyToClipboard(bankInfo.sheba.replace(/ /g, ''), 'sheba')}
                    className="text-primary text-sm hover:underline"
                  >
                    {copied === 'sheba' ? 'کپی شد!' : 'کپی'}
                  </button>
                </div>
                <p className="font-mono text-sm" dir="ltr">{bankInfo.sheba}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <span className="text-muted-foreground text-sm block mb-1">صاحب حساب</span>
                  <p className="font-bold">{bankInfo.accountHolder}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <span className="text-muted-foreground text-sm block mb-1">بانک</span>
                  <p className="font-bold">{bankInfo.bankName}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  پس از واریز، رسید پرداخت را به شماره واتساپ زیر ارسال کنید:
                </p>
                <a 
                  href={`https://wa.me/98${whatsappNumber.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span dir="ltr">{whatsappNumber}</span>
                </a>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mt-6">
              <p className="text-sm text-center">
                <strong className="text-accent">هزینه دوره:</strong>
                <br />
                داخل ایران: <span className="font-bold">۶,۷۰۰,۰۰۰ تومان</span>
                <br />
                خارج از کشور: <span className="font-bold">۱۳۵ دلار</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
