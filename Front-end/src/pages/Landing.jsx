import Dashboard from './Images/Dashboard.png';
import Logo from './Images/logo_mobelite.png';
import test from "./Images/Capture d'écran 2024-03-21 144508.png"
import projectOverview from './Images/project overview.png';
import sprintAnalytics from './Images/sprint-analytics.png';
import projectTracking from './Images/project-tracking.png'
import CustomReport from './Images/custom-reports.png'
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from '../components/SignInButton';
import { SignOutButton } from '../components/SignOutButton';
import '../App.css'
import { Fade } from 'react-reveal';
export default function Landing() {
  const IsAuthenticated = useIsAuthenticated();
  return (
    <div className="bg-white animate-fade-in">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-4 w-auto"
              src={Logo}/>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {IsAuthenticated ? ( <SignOutButton /> ): 
          (<div className="flex items-center">
          <SignInButton />
          <span aria-hidden="true" className="ml-2 text-gray-400">&rarr;</span>
          </div>
          )}
          </div>
        </nav>
      </header>

      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Fade top distance='10%' duration = {1500}>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text font-bold tracking-tight sm:text-5xl">
                A better way to manage your projet
              </h1>
              <p className="sous-titre animated-text mt-6 text-lg leading-8 text-gray-600">
              A more effective approach to project management, optimizing productivity and fostering sound decision-making.
              </p>
            </div>
            
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src={test}
                  alt="App screenshot"
                  width={2000}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        </Fade>
         {/* second section */}
         <Fade top distance='10%' duration = {1500}>
     <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-blue-500">Visualize Faster</h2>
      <p className="text1 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unlock the Potential of Jira Data Visualization</p>
      <p className="mt-6 text-lg leading-8 text-gray-600">Effortlessly explore and understand your project dynamics with our intuitive dashboard solutions. From project progress to sprint analytics, we've got you covered. Empower your team with actionable insights and elevate your project management experience with our Jira data visualization dashboards.</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
             <img src={projectOverview}/>
            </div>
            Project Overview
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Gain clarity into your projects with insightful visualizations. Track tickets, monitor progress, and identify bottlenecks effortlessly.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
            <img src={sprintAnalytics}/>
            </div>
            Sprint Analytics
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Stay on top of your sprint performance. Visualize sprint progress, velocity, and team capacity to optimize productivity.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
              <img src={projectTracking}/>
            </div>
            Project Tracking
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Effortlessly track project milestones and progress. Keep stakeholders informed and projects on track with comprehensive project tracking dashboards.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
              <img src={CustomReport}/>
            </div>
            Custom Reports
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Tailor reports to your specific needs. From burn-down charts to issue trends, visualize Jira data exactly how you want it.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</Fade>
      </div>
    </div>
  )
}
