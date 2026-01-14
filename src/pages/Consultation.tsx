import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { TrustBadges } from "@/components/cro";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { 
  ArrowRight, 
  ArrowLeft, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Calendar,
  Upload,
  CheckCircle,
  Shield
} from "lucide-react";

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    degreeLevel: "",
    university: "",
    subjectArea: "",
    serviceNeeded: "",
    deadline: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const services = [
    "Dissertation Proposal Development",
    "Thesis & Dissertation Writing Support",
    "Research Methodology Design",
    "Data Analysis Services",
    "Literature Review Structuring",
    "Editing & Proofreading",
    "Turnitin Similarity Reduction",
    "Supervisor Comments Revision",
    "Journal Article Preparation",
    "Formatting & Submission Compliance",
    "Full Dissertation Package",
    "Other (please describe)",
  ];

  const subjects = [
    "Business & Management",
    "Education",
    "Nursing & Healthcare",
    "Psychology",
    "Sociology",
    "Public Health",
    "Engineering",
    "IT & Data Science",
    "Economics & Finance",
    "Political Science",
    "Law",
    "Other",
  ];

  return (
    <Layout>
      <SEO 
        title="Free Consultation"
        description="Book a free consultation to discuss your dissertation or thesis needs. Get personalized advice and a custom quote from our PhD-qualified experts."
        canonical="/consultation"
        keywords={['free dissertation consultation', 'thesis help quote', 'academic support inquiry', 'research assistance consultation', 'PhD dissertation quote', 'free thesis consultation']}
      />

      {/* Breadcrumbs */}
      <div className="bg-midnight-rich">
        <div className="container px-4 sm:px-6">
          <Breadcrumbs className="text-white/60" />
        </div>
      </div>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Free Consultation
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Get Expert Help for Your Research
            </h1>
            <p className="text-lg text-primary-foreground/80 font-sans">
              Tell us about your project and we'll match you with a PhD-qualified expert in your field.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-sans font-semibold text-sm transition-colors ${
                        s <= step
                          ? "bg-gold text-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`w-16 md:w-24 h-1 mx-2 rounded-full ${
                          s < step ? "bg-gold" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs font-sans text-muted-foreground">
                <span>Program Info</span>
                <span>Service Details</span>
                <span>Your Project</span>
                <span>Contact Info</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-xl border border-border shadow-card p-8">
              {/* Step 1: Program Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <GraduationCap className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Tell Us About Your Program
                    </h2>
                    <p className="text-muted-foreground font-sans">
                      This helps us match you with the right expert
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-3">
                      Degree Level *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Master's", "PhD / Doctorate"].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleInputChange("degreeLevel", level)}
                          className={`p-4 rounded-lg border text-sm font-sans font-medium transition-colors ${
                            formData.degreeLevel === level
                              ? "border-gold bg-gold/5 text-foreground"
                              : "border-border hover:border-gold/50 text-muted-foreground"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      University / Institution *
                    </label>
                    <input
                      type="text"
                      value={formData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="e.g., University of Oxford"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Subject Area *
                    </label>
                    <select
                      value={formData.subjectArea}
                      onChange={(e) => handleInputChange("subjectArea", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select your field</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Service Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <BookOpen className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      What Help Do You Need?
                    </h2>
                    <p className="text-muted-foreground font-sans">
                      Select the service that best describes your needs
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-3">
                      Service Required *
                    </label>
                    <div className="grid gap-3 max-h-80 overflow-y-auto pr-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleInputChange("serviceNeeded", service)}
                          className={`p-4 rounded-lg border text-left text-sm font-sans transition-colors ${
                            formData.serviceNeeded === service
                              ? "border-gold bg-gold/5 text-foreground"
                              : "border-border hover:border-gold/50 text-muted-foreground"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Project Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Project Details
                    </h2>
                    <p className="text-muted-foreground font-sans">
                      Help us understand your timeline and requirements
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Deadline *
                    </label>
                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => handleInputChange("deadline", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Describe Your Project *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      placeholder="Tell us about your research topic, current progress, and specific challenges you're facing..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Upload Documents (Optional)
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground font-sans">
                        Drag files here or click to upload
                      </p>
                      <p className="text-xs text-muted-foreground font-sans mt-1">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Almost There!
                    </h2>
                    <p className="text-muted-foreground font-sans">
                      Enter your contact details to receive your personalized consultation
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="bg-ivory-warm rounded-lg p-4 flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground font-sans">
                      Your information is 100% confidential. We never share your details with 
                      third parties. See our <Link to="/ethics" className="text-gold hover:underline">privacy policy</Link>.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button variant="copper" onClick={nextStep}>
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="copper" size="lg">
                    Submit Request
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12">
              <TrustBadges variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
