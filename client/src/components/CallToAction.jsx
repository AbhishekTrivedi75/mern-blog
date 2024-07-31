import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Web Development?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/AbhishekTrivedi75?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    Web Development Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://as1.ftcdn.net/v2/jpg/02/14/87/96/1000_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg" />
        </div>
    </div>
  )
}