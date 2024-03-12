import "./Footer.css"
const socmediaLinks = [
    {
        icon: 'fa-brands fa-facebook-f',
        url: 'https://facebook.com'
    },
    {
        icon: 'fa-brands fa-twitter',
        url: 'https://x.com'
    },
    {
        icon: 'fa-brands fa-instagram',
        url: 'https://instagram.com'
    },
    {
        icon: 'fa-brands fa-linkedin',
        url: 'https://linkedin.com'
    },
    {
        icon:  'fa-brands fa-pinterest',
        url: 'https://pinterest.com'
    }
]
function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="soc-media-icons">
                    {
                        socmediaLinks.map(el => (
                            <a href={el.url} target="_blank" rel="noreferrer" >
                                <i class={el.icon}></i>
                            </a>
                        ))
                    }
                </div>
                <p>
                    © {new Date().getFullYear()} copyright all right reserved
                </p>
            </div>
        </footer>
        
    )
}

export default Footer;