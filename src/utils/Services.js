const servicesInfo = [
    {
        "id":1,
        "category": "Graphic Design",
        "services": [
            {
                "name": "Branding & Identity",
                "examples": ["Logos", "Business Cards", "Brand Guidelines"]
            },
            {
                "name": "Marketing & Promotional Design",
                "examples": ["Ads", "Banners", "Brochures", "Flyers"]
            },
            {
                "name": "Social Media Graphics",
                "examples": ["Posts", "Stories", "Reels"]
            },
            {
                "name": "Event & Special Occasion Design",
                "examples": ["Invitations", "Posters", "Merchandise"]
            },
            {
                "name": "Editorial & Publication",
                "examples": ["Magazines", "E-books", "Reports"]
            },
            {
                "name": "Corporate & Document Design",
                "examples": ["Presentations", "Forms", "Infographics"]
            },
            {
                "name": "Custom Graphic Services",
                "examples": ["Illustrations", "UI/UX Design"]
            }
        ]
    }
    ,
    {
        "id":2,
        "category": "Video Editing",
        "services": [
            {
                "name": "Short-Form Content",
                "examples": ["Reels", "TikToks", "Shorts"]
            },
            {
                "name": "Long-Form Content",
                "examples": ["YouTube", "Documentaries", "Interviews"]
            },
            {
                "name": "Corporate & Business Videos",
                "examples": ["Promos", "Training Videos", "Ads"]
            },
            {
                "name": "Advanced Editing & Motion Graphics",
                "examples": ["VFX", "3D Elements", "Animation"]
            },
            {
                "name": "Cinematography & Video Shooting",
                "examples": ["Professional Filming", "Camera Work"]
            },
            {
                "name": "Custom Video Services",
                "examples": ["Tailored edits", "Unique projects"]
            }
        ]
    }
    ,
    {
        "id": 3,
        "category": "3D Animation",
        "services": [
            {
                "name": "2D Animation",
                "examples": ["Explainer Videos", "Character Animation", "Whiteboard"]
            },
            {
                "name": "3D Animation & Modeling",
                "examples": ["Product Renders", "Architectural Visualization"]
            },
            {
                "name": "Motion Graphics",
                "examples": ["Infographics", "Typography", "VFX"]
            }
        ]
    }
    ,
    {
        "id": 4,
        "category": "Content Creation",
        "services": [
            {
                "name": "Scriptwriting & Storytelling",
                "examples": ["Video Scripts", "Ads", "Brand Stories"]
            },
            {
                "name": "Blog & Article Writing",
                "examples": ["SEO-Friendly", "Business & Marketing Content"]
            },
            {
                "name": "Copywriting & Ad Content",
                "examples": ["Sales Copy", "Headlines", "Taglines"]
            },
            {
                "name": "Visual Content Creation",
                "examples": ["Reels", "Infographics", "Carousels"]
            }
        ]
    }
    ,
    {
        "id": 5,
        "category": "Social Media Marketing",
        "services": [
            {
                "name": "Social Media Strategy & Planning",
                "examples": ["Content Calendars", "Posting Schedules"]
            },
            {
                "name": "Content Posting & Optimization",
                "examples": ["Engaging Posts", "Hashtags", "SEO"]
            },
            {
                "name": "Community Management",
                "examples": ["Comments", "Messages", "Audience Engagement"]
            },
            {
                "name": "Analytics & Growth Tracking",
                "examples": ["Insights", "Reports", "Improvement Plans"]
            }
        ]
    },
    {
        "id": 6,
        "category": "Digital Advertisement",
        "services": [
            {
                "name": "Digital Advertising",
                "examples": ["Facebook", "Instagram", "Google Ads", "PPC"]
            },
            {
                "name": "SEO & Online Presence Optimization",
                "examples": ["Website & Content Optimization"]
            },
            {
                "name": "Metro Train & Transit Ads",
                "examples": ["Nagpur Metro Digital & Static Ads"]
            },
            {
                "name": "Billboard Advertising",
                "examples": ["Hoardings & Outdoor Ads across Nagpur"]
            },
            {
                "name": "Brand Strategy & Consultation",
                "examples": ["Market Positioning", "Growth Plans"]
            }
        ]
    }
    ,
    {
        "id": 7,
        "category": "Web Development",
        "services": [
            {
                "name": "Website Design & Development",
                "examples": ["Custom Sites", "E-commerce"]
            },
            {
                "name": "Landing Pages",
                "examples": ["Lead Generation", "Portfolio Pages"]
            },
            {
                "name": "UI/UX Design",
                "examples": ["Web Interface Design", "App Interface Design", "Figma to Web"]
            },
            {
                "name": "App Development",
                "examples": ["Basic Mobile Apps", "Web Apps"]
            }
        ]
    }
    ,
    {
        "id": 8,
        "category": "Cinematography",
        "services": [
            {
                "name": "Film Production",
                "examples": ["Short Films", "Feature Films", "Documentaries"]
            },
            {
                "name": "Music Videos",
                "examples": ["Band Performances", "Concept Videos"]
            },
            {
                "name": "Commercials",
                "examples": ["TV Ads", "Online Ads"]
            },
            {
                "name": "Event Coverage",
                "examples": ["Weddings", "Corporate Events", "Live Performances"]
            },
            {
                "name": "Aerial Cinematography",
                "examples": ["Drone Footage", "Aerial Shots"]
            }
        ]
    }
]

export function getServices(category) {
    const services = servicesInfo.find(service => service.category === category);
    return services;
}