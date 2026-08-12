
import "react-modal-video/css/modal-video.css"
        import "../public/assets/css/zeena.css"
        import 'swiper/css'
        // import "swiper/css/navigation"
        import "swiper/css/pagination"
        import 'swiper/css/free-mode';
        import { openSans, poppins } from '@/lib/font'
        export const metadata = {
            title: 'Pm Advogados',
            description: 'Pm Advogados - Possidonio & Migliavacca Advogados Associados'
        }

        export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
            return (
                <html lang="pt-br" className={`${openSans.variable} ${poppins.variable}`}>    
                    <body>{children}</body>
                </html>
            )
        }