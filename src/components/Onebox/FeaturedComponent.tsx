import { ReactNode } from "react";
import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";

import mail from "../../assets/mail.svg";

type LeadDetailProps = {
  label: string;
  value: string;
};

type ActivityStepProps = {
  step: string;
  date: string;
  icon: ReactNode;
};

function FeaturedComponent() {
  return (
    <div className='border-l-2 bg-white dark:bg-black dark:border-[#33383F] border-[#E0E0E0] h-full overflow-y-scroll no-scrollbar px-2'>
      <section className='mt-5 font-bold dark:bg-[#23272C] bg-[#ECEFF3] text-black dark:text-white rounded-lg py-2 pl-4'>
        Lead Details
      </section>

      <div className='px-6 my-10 space-y-6 dark:text-white text-[#637381]'>
        <LeadDetail label='Name' value='Orlando' />
        <LeadDetail label='Contact No' value='+54-9062827869' />
        <LeadDetail label='Email ID' value='orlando@gmail.com' />
        <LeadDetail label='LinkedIn' value='linkedin.com/in/timvadde/' />
        <LeadDetail label='Company Name' value='Reachinbox' />
      </div>

      <section className='mt-8 font-bold dark:bg-[#23272C] bg-[#ECEFF3] text-black dark:text-white rounded-lg py-2 pl-4'>
        Activities
      </section>

      <div className='my-8 px-4'>
        <div className='px-2 text-black dark:text-white'>Campaign Name</div>
        <div className='my-4 text-sm px-2 text-black dark:text-white'>
          3 Steps | 5 Days in Sequence
        </div>

        <ActivityStep
          step='Step 1: Email'
          date='Sent 3rd, Feb'
          icon={<IoIosSend className='mr-2' />}
        />
        <ActivityStep
          step='Step 2: Email'
          date='Open 5th, Feb'
          icon={<IoMailOpen className='mr-2 text-yellow-500' />}
        />
        <ActivityStep
          step='Step 3: Email'
          date='Open 5th, Feb'
          icon={<IoMailOpen className='mr-2 text-yellow-500' />}
        />
      </div>
    </div>
  );
}

function LeadDetail({ label, value }: LeadDetailProps) {
  return (
    <div className='flex justify-between text-sm'>
      <div>{label}</div>
      <div className='dark:text-[#B9B9B9]'>{value}</div>
    </div>
  );
}

function ActivityStep({ step, date, icon }: ActivityStepProps) {
  return (
    <div className='flex my-4 items-center'>
      <img
        src={mail}
        className='w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full'
        alt='mail icon'
      />
      <div className='ml-10 space-y-2 text-black dark:text-white'>
        <div>{step}</div>
        <div className='text-[#B9B9B9] text-sm flex items-center'>
          {icon} {date}
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponent;
