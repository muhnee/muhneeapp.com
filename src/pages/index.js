import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';

import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';

import customerData from '../data/customer';

import HeroImage from '../svg/HeroImage';
import Goals from '../svg/Goals';
import MobileSpend from '../svg/MobileSpend';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Muhnee</h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            An exciting and simple way to help you manage your money.
          </p>
          <p
            className="mt-8 md:mt-12"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Button size="lg" style={{ minWidth: 280, height: '1.25rem', margin: '0.25rem' }}>
              Web Platform
            </Button>
            <img src="/images/apple-app-store.svg" style={{ height: 60, margin: '0.25rem' }} />
            <img src="/images/google-play-badge.png" style={{ height: 80, margin: '0.25rem' }} />
          </p>
          <p className="mt-4 text-gray-600">
            Recommended: Web Version: Google Chrome | iOS 10+ | Android 6+
          </p>
          <p className="mt-2 text-gray-600" style={{ fontSize: '0.75rem' }}>
            App Store, iOS and iTunes Store are trademarks of Apple Inc., registered in the U.S. and
            other countries.
          </p>
          <p className="mt-1 text-gray-600" style={{ fontSize: '0.75rem' }}>
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mobile App</p>
              <p className="mt-4">
                Our mobile app helps tracks your day-to-day use, adding quick transactions.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Web Platform</p>
              <p className="mt-4">
                Muhnee as a web is super-powerful, it is integrated into the cloud and deeply
                connects what you do daily, into simple to use reports, in addition to some more
                powerful features.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Your spending, your way</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Track your spending, by viewing and adding your day-to-day spend over our app, so there
            is no need to visit our web version.
          </p>
        </div>
      }
      secondarySlot={<MobileSpend />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Track, Analyse and Report</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once you start tracking your spending, you can analyse it directly over the web
            platform, and plan for it in the next month.
          </p>
        </div>
      }
      secondarySlot={<Goals />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Sample Stat" />
          </div>
          {/* <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div> */}
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What our users are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to start saving?</h3>
      <p className="mt-8 text-xl font-light">
        It's easy, just simply create an account to get started
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
