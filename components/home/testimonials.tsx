import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Karnal, Haryana",
    text: "I have been using Kumar Feeds for 5 years now. My broilers grow faster and I get better prices in the market. Very happy with the quality.",
    rating: 5,
  },
  {
    name: "Sunil Patel",
    location: "Anand, Gujarat",
    text: "The layer feed has improved my egg production by 15%. The team also helped me with feeding schedules. Excellent support!",
    rating: 5,
  },
  {
    name: "Mohan Singh",
    location: "Ludhiana, Punjab",
    text: "Quality is consistent and delivery is always on time. I recommend Kumar Feeds to all my farmer friends. Best feed company in North India.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Hear From Our Happy Farmers
          </h2>
          <p className="text-muted-foreground">
            Thousands of farmers trust Kumar Feeds. Here&apos;s what some of them have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
