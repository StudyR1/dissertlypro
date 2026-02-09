import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, ItemListSchema } from "@/components/schemas";
import { TLDRBlock } from "@/components/ui/QuickAnswer";
import { universityData, getUniversitiesByRegion } from "@/data/universityData";
import { 
  GraduationCap, 
  Search, 
  MapPin, 
  Users, 
  Star, 
  ArrowRight,
  Globe,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const regions = [
  { code: "all", name: "All Regions", flag: "🌍" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
];

const UniversitiesHub = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allUniversities = Object.values(universityData);

  const filteredUniversities = useMemo(() => {
    return allUniversities.filter((uni) => {
      const matchesRegion = selectedRegion === "all" || uni.region === selectedRegion;
      const matchesSearch = searchQuery === "" || 
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.researchFocus.some(focus => focus.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesRegion && matchesSearch;
    });
  }, [allUniversities, selectedRegion, searchQuery]);

  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allUniversities.length };
    regions.slice(1).forEach(region => {
      counts[region.code] = getUniversitiesByRegion(region.code).length;
    });
    return counts;
  }, [allUniversities]);

  const totalStudentsHelped = useMemo(() => {
    return allUniversities.reduce((sum, uni) => {
      const num = parseInt(uni.stats.studentsHelped.replace(/\D/g, ''));
      return sum + num;
    }, 0);
  }, [allUniversities]);

  return (
    <Layout>
      <SEO 
        title="University-Specific Dissertation Support | All Universities"
        description={`Expert dissertation help for students at ${allUniversities.length} top universities worldwide. Institution-specific support for Oxford, Harvard, Cambridge, MIT, and more. ${totalStudentsHelped.toLocaleString()}+ students helped.`}
        canonical="/universities"
        keywords={[
          "university dissertation help",
          "Oxford thesis support",
          "Harvard dissertation",
          "Cambridge PhD help",
          "MIT thesis support",
          "university-specific academic support"
        ]}
      />
      
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Universities", url: "/universities" },
      ]} />
      <ItemListSchema
        name="University-Specific Dissertation Support"
        description="Expert dissertation help for students at top universities worldwide"
        items={allUniversities.map(uni => ({
          name: `${uni.name} Dissertation Support`,
          url: `/${uni.region}/${uni.shortName.toLowerCase()}`,
          description: `Expert dissertation help for ${uni.name} students in ${uni.city}`,
        }))}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-copper/[0.03] rounded-full blur-[120px] hidden md:block" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-6">
              <Globe className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">{allUniversities.length} Universities Supported</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              University-Specific <span className="text-copper-light">Dissertation Support</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-ivory font-sans leading-relaxed mb-8 max-w-3xl mx-auto">
              Expert guidance tailored to your university's unique requirements, deadlines, and academic expectations.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{totalStudentsHelped.toLocaleString()}+ students helped</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <GraduationCap className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{allUniversities.length} universities</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-5 w-5 text-copper-light" />
                <span className="font-sans">4 regions worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <TLDRBlock>
              DissertlyPro provides institution-specific dissertation support for students at {allUniversities.length} leading universities 
              across the UK, US, Australia, and Canada. Each university page includes tailored guidance on requirements, 
              deadlines, and academic expectations—plus testimonials from students at your institution.
            </TLDRBlock>
          </div>
        </div>
      </section>

      {/* Region Tabs and Search Section */}
      <section className="sticky top-0 z-30 bg-cream-warm border-b border-border shadow-sm">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Region Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 py-4 gap-1 border-b border-border">
              {regions.map((region) => (
                <button
                  key={region.code}
                  onClick={() => setSelectedRegion(region.code)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-t-lg text-sm font-sans font-medium whitespace-nowrap transition-all ${
                    selectedRegion === region.code
                      ? "bg-card text-copper border-t border-l border-r border-border -mb-px"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <span className="text-lg">{region.flag}</span>
                  <span className="hidden sm:inline">{region.name}</span>
                  <span className="sm:hidden">{region.code === "all" ? "All" : region.code.toUpperCase()}</span>
                  <span className={`inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-full text-xs ${
                    selectedRegion === region.code
                      ? "bg-copper text-white"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {regionCounts[region.code]}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative py-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by university name, city, or research focus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-5 text-base bg-card border-border"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {filteredUniversities.length > 0 ? (
              <>
                <p className="text-muted-foreground font-sans mb-8">
                  Showing {filteredUniversities.length} universit{filteredUniversities.length === 1 ? 'y' : 'ies'}
                  {selectedRegion !== "all" && ` in ${regions.find(r => r.code === selectedRegion)?.name}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUniversities.map((uni) => (
                    <Link
                      key={uni.slug}
                      to={`/${uni.region}/${uni.slug}`}
                      className="group bg-card rounded-2xl border border-border p-6 hover:shadow-card hover:border-copper/30 transition-all"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-copper/10 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <span className="text-2xl">
                          {regions.find(r => r.code === uni.region)?.flag}
                        </span>
                      </div>

                      {/* University Info */}
                      <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-copper transition-colors mb-1">
                        {uni.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-sans flex items-center gap-1 mb-3">
                        <MapPin className="h-3 w-3" />
                        {uni.city}, {uni.country}
                      </p>

                      {/* Ranking */}
                      {uni.ranking && (
                        <p className="text-xs text-copper font-sans mb-3">
                          {uni.ranking}
                        </p>
                      )}

                      {/* Research Focus Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {uni.researchFocus.slice(0, 3).map((focus) => (
                          <span 
                            key={focus}
                            className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-sans"
                          >
                            {focus}
                          </span>
                        ))}
                        {uni.researchFocus.length > 3 && (
                          <span className="px-2 py-0.5 text-muted-foreground text-xs font-sans">
                            +{uni.researchFocus.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm">
                            <Users className="h-4 w-4 text-copper" />
                            <span className="text-foreground font-sans">{uni.stats.studentsHelped}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 text-copper fill-copper" />
                            <span className="text-foreground font-sans">{uni.stats.avgRating}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-copper group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  No universities found
                </h3>
                <p className="text-muted-foreground font-sans mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button 
                  variant="midnight-outline"
                  onClick={() => { setSearchQuery(""); setSelectedRegion("all"); }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-16 lg:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              Global Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Support Across 4 Regions
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              Each region has dedicated experts who understand local academic systems and expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {regions.slice(1).map((region) => {
              const regionUnis = getUniversitiesByRegion(region.code);
              const totalHelped = regionUnis.reduce((sum, uni) => {
                return sum + parseInt(uni.stats.studentsHelped.replace(/\D/g, ''));
              }, 0);
              
              return (
                <Link
                  key={region.code}
                  to={`/${region.code}`}
                  className="group bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card hover:border-copper/30 transition-all"
                >
                  <span className="text-4xl mb-4 block">{region.flag}</span>
                  <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-copper transition-colors mb-2">
                    {region.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mb-4">
                    {regionCounts[region.code]} universities
                  </p>
                  <p className="text-sm text-copper font-sans font-medium">
                    {totalHelped.toLocaleString()}+ students helped
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-copper/20 text-copper-light mb-6">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Don't See Your University?
            </h2>
            <p className="text-ivory font-sans text-lg mb-8">
              We support students at 50+ universities worldwide. Contact us for personalized support regardless of your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" size="lg" asChild>
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UniversitiesHub;
