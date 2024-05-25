import Image from "next/image"
import img1 from "@/assets/illustration-hero.svg"
import iconSong from "@/assets/icon-music.svg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="card">
        <div>
          <Image src={img1} width={400} height={200} alt="image" />
        </div>
        <div>
          <h3>Order Summary</h3>
          <p className="descrip-order">You can now listen to milions of songs, audiobooks and podcasts on any device anywhere you like!</p>
        </div>
        <div className="div-price">
          <div className="div1">
            <div>
              <Image src={iconSong} width={50} height={50} alt="icon" />
            </div>
            <div>
              <p className="text-plan">Annual Plan</p>
              <p className="text-price">$59.99/year</p>
            </div>
          </div>
          <button className="btn-change">Change</button>
        </div>
        <Link className="btn-proceed" href={"/"}>Proced to Payment</Link>
        <button>Cancel Order</button>
      </div>
    </main>
  )
}
