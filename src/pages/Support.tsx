import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Support = () => {
  const handleEmailSupport = () => {
    window.location.href = "mailto:support@spectrify.co.uk?subject=Spectrify Support Request";
  };

  const handleFAQ = () => {
    // Scroll to FAQ section
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-deep to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            <span className="golden-text">Support</span> Center
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            We're here to help you get the most out of Spectrify. Find answers, get assistance, and connect with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleEmailSupport}
              className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-3"
            >
              Contact Support
            </Button>
            <Button 
              onClick={handleFAQ}
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3"
            >
              View FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Support Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </CardTitle>
                <CardDescription className="text-white/70">
                  Get personalized help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Send us a detailed message and we'll respond within 24 hours.
                </p>
                <Button onClick={handleEmailSupport} className="w-full bg-gold hover:bg-gold/90 text-black">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQ
                </CardTitle>
                <CardDescription className="text-white/70">
                  Find answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Browse our frequently asked questions for quick solutions.
                </p>
                <Button onClick={handleFAQ} variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Documentation
                </CardTitle>
                <CardDescription className="text-white/70">
                  Learn how to use Spectrify effectively
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Access our comprehensive user guides and tutorials.
                </p>
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                  Read Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">
            <span className="golden-text">Frequently Asked</span> Questions
          </h2>
          
          <div className="space-y-6">
            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-white">How do I identify a wine using Spectrify?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Simply take a photo of the wine label using the camera feature in the app. Our AI will analyze the image and provide detailed information about the wine, including origin, vintage, flavor profiles, and food pairing suggestions.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-white">Can I use Spectrify offline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  While some features require an internet connection for real-time wine identification, you can access your saved wine journal and previously identified wines offline. We recommend connecting to the internet for the best experience.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-white">How accurate is the wine identification?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Our AI has been trained on a vast database of wine labels and achieves high accuracy rates. However, the quality of the photo, lighting conditions, and label clarity can affect results. For best results, ensure good lighting and a clear, unobstructed view of the label.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-white">How do I manage my wine cellar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Use the Cellar Management feature to add wines to your collection, track inventory, set drinking windows, and monitor value appreciation. You can organize wines by region, varietal, or any custom criteria you prefer.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-white">Is my data secure and private?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Yes, we take your privacy seriously. All personal data is encrypted and stored securely. We never share your information with third parties without your explicit consent. You can review our Privacy Policy for detailed information about data handling.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-gold/20">
              <CardHeader>
                <CardTitle className="text-white">How do I export my wine journal?</CardTitle>
              </CardHeader>
                              <CardContent>
                  <p className="text-white/80">
                    You can export your wine journal data in various formats including PDF and CSV. Go to Settings &gt; Export Data to download your complete wine collection and tasting notes.
                  </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-gold/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-playfair">
                <span className="golden-text">Get in Touch</span>
              </CardTitle>
              <CardDescription className="text-white/70">
                We're here to help you with any questions or concerns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gold font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>support@spectrify.co.uk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Response within 24 hours</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gold font-semibold mb-4">Support Hours</h3>
                  <div className="space-y-2 text-white/80">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM GMT</div>
                    <div>Saturday: 10:00 AM - 4:00 PM GMT</div>
                    <div>Sunday: Closed</div>
                    <Badge className="bg-gold text-black mt-2">Emergency support available 24/7</Badge>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8 bg-gold/20" />
              
              <div className="text-center">
                <p className="text-white/70 mb-4">
                  Can't find what you're looking for? Our support team is ready to help.
                </p>
                <Button onClick={handleEmailSupport} className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-3">
                  Contact Support Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            onClick={() => window.location.href = '/#home'} 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-black"
          >
            ← Back to Home
          </Button>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 Spectrify. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Support; 