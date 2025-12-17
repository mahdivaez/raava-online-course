import { AnimatedSection } from "./AnimatedSection";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  instagramLink: string;
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

export const EvaluationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("فرم با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.");
    reset();
  };

  const inputClass = "bg-card border-border focus:border-primary text-foreground placeholder:text-muted-foreground";

  return (
    <section id="form" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            فرم ارزیابی <span className="text-primary">ورود به دوره</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            برای شرکت در دوره، لطفاً به سؤال‌های زیر پاسخ دهید. پاسخ‌ها فقط برای ارزیابی و شناخت بهتر مسیر شما استفاده می‌شود.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
            {/* Section: Basic Info */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-primary">اطلاعات پایه</h3>
              <div className="space-y-4">
                <div><Label>۱. نام و نام خانوادگی *</Label><Input {...register("fullName", { required: true })} className={inputClass} placeholder="نام کامل خود را وارد کنید" />{errors.fullName && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}</div>
                <div><Label>۲. لینک پیج اینستاگرام / شبکه اجتماعی اصلی *</Label><Input {...register("instagramLink", { required: true })} className={inputClass} placeholder="https://instagram.com/username" />{errors.instagramLink && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}</div>
              </div>
            </div>

            {/* Section: Goals */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-primary">انگیزه و هدف</h3>
              <div className="space-y-4">
                <div><Label>۳. چرا می‌خواهید در این دوره ثبت‌نام کنید؟ *</Label><Textarea {...register("whyRegister", { required: true })} className={inputClass} rows={3} />{errors.whyRegister && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}</div>
                <div><Label>۴. هدف شما از این مسیر چیست؟ *</Label><Textarea {...register("goal", { required: true })} className={inputClass} rows={3} />{errors.goal && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}</div>
                <div><Label>۵. در حال حاضر در چه حوزه‌ای محتوا تولید می‌کنید؟ *</Label><Textarea {...register("contentArea", { required: true })} className={inputClass} rows={3} placeholder="یا اگر شروع نکرده‌اید دوست دارید در چه حوزه‌ای فعالیت کنید؟" />{errors.contentArea && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}</div>
              </div>
            </div>

            {/* Section: Challenges */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-primary">وضعیت فعلی پیج و چالش‌ها</h3>
              <div className="space-y-4">
                <div><Label>۶. آیا تا به حال تبلیغات انجام داده‌اید؟ *</Label><RadioGroup defaultValue="no" {...register("hasAdvertised")} className="flex gap-6 mt-2"><div className="flex items-center gap-2"><RadioGroupItem value="yes" id="ad-yes" /><Label htmlFor="ad-yes">بله</Label></div><div className="flex items-center gap-2"><RadioGroupItem value="no" id="ad-no" /><Label htmlFor="ad-no">خیر</Label></div></RadioGroup></div>
                <div><Label>۷. ۳ مورد از چالش‌های اصلی شما در مسیر کاری‌تان چیست؟ *</Label><Textarea {...register("challenges", { required: true })} className={inputClass} rows={3} />{errors.challenges && <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>}</div>
                <div><Label>۸. یک پست/محتوا که دوستش دارید لینک کنید و بگویید چرا</Label><Textarea {...register("favoritePost")} className={inputClass} rows={3} /></div>
                <div><Label>۹. دوست دارید در مسیر محتوا شبیه چه فرد تاثیرگذاری شوید؟</Label><Input {...register("roleModel")} className={inputClass} placeholder="ایرانی یا خارجی" /></div>
              </div>
            </div>

            {/* Section: Collaboration */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-primary">تبلیغات و همکاری با راوا</h3>
              <div className="space-y-4">
                <div><Label>۱۰. آیا علاقه دارید در پروژه‌های تبلیغاتی راوا همکاری کنید؟</Label><RadioGroup defaultValue="yes" {...register("ravaInterest")} className="flex gap-6 mt-2"><div className="flex items-center gap-2"><RadioGroupItem value="yes" id="rava-yes" /><Label htmlFor="rava-yes">بله</Label></div><div className="flex items-center gap-2"><RadioGroupItem value="no" id="rava-no" /><Label htmlFor="rava-no">خیر</Label></div></RadioGroup></div>
                <div><Label>۱۱. اگر تجربه تبلیغ داشته‌اید، نام برندهایی که از همکاری با آن‌ها راضی بوده‌اید</Label><Textarea {...register("satisfiedBrands")} className={inputClass} rows={2} /></div>
              </div>
            </div>

            {/* Section: Income */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-primary">درآمد</h3>
              <div><Label>۱۲. درآمد ماهانه از پیج (در صورت تمایل به پاسخ)</Label><Input {...register("monthlyIncome")} className={inputClass} placeholder="عدد تقریبی یا بازه بنویسید" /></div>
            </div>

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full py-7 text-lg glow-orange pixel-border bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin ml-2" />در حال ارسال...</> : "ارسال فرم"}
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};
