/*
 This is a list of themes that I've premade. To use, edit the config.ts file.
*/

const pinkish = {
    text: {
        base: "text-white",
        subtitle: "text-slate-400",
        bio: "text-slate-500",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
        main: "bg-[#14202b]",
    },
    skills: {
        bg: "bg-gray-600",
        text: "text-white",
        line: "bg-pink-500",
    },
    banner: {
        border: "border-pink-500",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-pink-700",
        to: "to-pink-500",
    },
    arrow: {
        fill: "fill-pink-500",
    },
};

const blueish = {
    text: {
        base: "text-white",
        subtitle: "text-slate-400",
        bio: "text-slate-500",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
        main: "bg-[#14202b]",
    },
    skills: {
        bg: "bg-gray-600",
        text: "text-white",
        line: "bg-blue-500",
    },
    banner: {
        border: "border-blue-500",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-blue-700",
        to: "to-blue-500",
    },
    arrow: {
        fill: "fill-blue-500",
    },
};

const dracula = {
    text: {
        base: "text-[#f8f8f2]",
        subtitle: "text-[#6272a4]",
        bio: "text-[#6272a4]",
        "link-content": "text-[#6272a4]",
    },
    bg: {
        profile: "bg-[#44475a]",
        links: "bg-[#44475a]",
        main: "bg-[#282a36]",
    },
    skills: {
        bg: "bg-[#50fa7b]",
        text: "text-[#44475a]",
        line: "bg-[#bd93f9]",
    },
    banner: {
        border: "border-[#bd93f9]",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-[#bd93f9]",
        to: "to-[#bd93f9]",
    },
    arrow: {
        fill: "fill-[#50fa7b]",
    },
};

const schemes = [pinkish, blueish, dracula];

export function getRandom() {
    const params = new URLSearchParams(document.location.search);
    const scheme = params.get("scheme");
    if (scheme != null) {
        switch (scheme) {
            case "pinkish":
                return pinkish;
            case "blueish":
                return blueish;
            case "dracula":
                return dracula;
        }
    }
    return schemes[Math.floor(Math.random() * schemes.length)];
}

export default schemes;
