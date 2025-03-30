import React from 'react'
import Heading from './Heading'

const PremierFeatures = () => {
    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8 md:pt-8 pt-0">
            <Heading
                smallHeadingEmoji="🔥"
                smallHeadingText="PREMIER FEATURES"
                bigHeadingText="Discover our product's Capabilities"
                highLightedText="Capabilities"
                bottomText="Don't settle for mediocrity - embrace the future of management with VultiSig." />

            <div className='flex flex-col gap-10 justify-center items-center'>
                <div className='flex lg:w-full md:w-[32rem] w-[100%] lg:flex-row flex-col gap-10'>
                    <div data-aos="fade-up" className='bg-design-card-hover rounded-3xl flex justify-end flex-col p-10 lg:max-w-xl max-w-lg'>
                        <div className='bg-design-dark p-2 rounded-[1.3rem] text-3xl w-fit mt-2'>⭐️</div>
                        <p className='font-medium lg:text-[2.6rem] lg:leading-[3.3rem] text-3xl leading-[2.6rem] pt-5'>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</p>
                    </div>
                    <div data-aos="fade-up" className='border-design-border flex flex-col h-fit hover:border-design-accent/50 bg-design-card  border rounded-3xl'>
                        <img className='h-[18rem] self-center' src="https://waiting-wrist-6f6.notion.site/image/attachment%3A9a62289a-ec52-43d2-82c9-01229fc4c2b9%3AGroup_1000004705.png?table=block&id=19823043-5592-8099-a72d-c0babf2fc6bf&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=660&userId=&cache=v2" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Smart Task Management
                            </h4>
                            <p className='text-gray-500 font-medium'>Say goodbye to chaos with our smart task management system</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col lg:w-full md:w-[32rem] w-[100%] gap-10 mb-16'>
                    <div data-aos="fade-up" className='border-design-border flex flex-col hover:border-design-accent/50 bg-design-card  border rounded-3xl'>
                        <img className='h-[18rem] self-center' src="https://waiting-wrist-6f6.notion.site/image/attachment%3A2dbb8315-7e27-468c-bb78-84839957d9d6%3AGroup_1000004713.png?table=block&id=19823043-5592-80b7-a839-cf3c22fbb58b&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=660&userId=&cache=v2" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Flexible Scheduling
                            </h4>
                            <p className='text-gray-500 font-medium'>Stay productive with our flexible scheduling system</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='border-design-border flex flex-col hover:border-design-accent/50 bg-design-card  border rounded-3xl'>
                        <img className='h-[18rem] self-center' src="https://waiting-wrist-6f6.notion.site/image/attachment%3A036d7d85-afdd-4279-be4e-35bcf9f1b336%3AVulti_Agent_Phone.png?table=block&id=19123043-5592-80e6-916c-faf236b18c6b&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=580&userId=&cache=v2" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Easy Communication
                            </h4>
                            <p className='text-gray-500 font-medium'>Collaborate seamlessly with your team in real-time</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='border-design-border flex flex-col hover:border-design-accent/50 bg-design-card  border rounded-3xl'>
                        <img className='h-[18rem] self-center' src="https://waiting-wrist-6f6.notion.site/image/attachment%3A9ab6d696-f531-4caa-be40-3b55b9f93712%3AVulti_Agent_Reading_(2).png?table=block&id=19123043-5592-8083-8829-f0cc388abb48&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=660&userId=&cache=v2" alt="card-img" />
                        <div className='p-8'>
                            <h4 className='text-2xl font-semibold pb-1'>
                                Analytics
                            </h4>
                            <p className='text-gray-500 font-medium'>Gain valuable insights with our advanced analytics feature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremierFeatures