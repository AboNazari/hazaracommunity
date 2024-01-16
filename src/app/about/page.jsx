import Header from '@/src/components/navigation/Header';
import React from 'react';
import Footer from '@/src/components/footer/footer';

function Page() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-dark text-white p-4 flex-col ">
                <div className="max-w-2xl text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-6">About Us</h1>
                    <p className="text-lg lg:text-xl text-justify">
                        As Hazara students who are unable to participate physically in the ongoing campaigns and protests, we are deeply motivated to contribute to our community&apos;s cause in other meaningful ways. This platform is our way of performing our responsibility and ensuring our voices are heard. We believe in the power of information and solidarity to drive change, and through this initiative, we aim to support and amplify the movement for justice and recognition of the Hazara people&apos;s plight. <br />
                        <span className='text-red-500'>#StopHazaraGenocide</span>
                    </p>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Page;
