import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image';
import insta from '@/public/Icons/instagram.svg'

export default function Contact() {
  return (
    <section className="flex justify-center items-center flex-col">
      <Card className="my-32">
        <CardBody>
          <h1 className="text-4xl font-bold text-center flex text-[#640d14] dark:text-[#a24857]">
            {"Contact Us:"}&nbsp;&nbsp;
            <span className="font-normal">{"utscicehockey@gmail.com"}</span>
          </h1>
        </CardBody>
      </Card>
      <h2 className="text-2xl">OR HIT US UP ON INSTA</h2>
      <div className='my-12'
      >
        <Link
          href="https://www.instagram.com/utscmenstchockey/"
          target="_blank"
        >
          <Image src={insta} height={100} alt="instagram" className='dark:invert' />
        </Link>
      </div>
    </section>
  );
}