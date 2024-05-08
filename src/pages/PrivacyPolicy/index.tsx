import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-[#131313] min-h-screen text-white max-w-screen overflow-hidden">
        <Navbar sticky={false} />
        <div className="flex items-center justify-center">
          <div className="max-w-5xl p-4 bg-dark-primary rounded shadow-md">
            <div className="items-center justify-center flex">
              <h2 className="text-4xl font-bold mb-24">Privacy Policy</h2>
            </div>
            <p className="mb-4">Last updated: January 14, 2024</p>
            <div className="text-gray-400">
              <p className="mb-4">
                This privacy notice for Razor Labs, Inc. (
                <strong className="text-white">"Company," "we," "us,"</strong>{' '}
                or <strong className="text-white">"our"</strong>), describes how
                and why we might collect, store, use, and/or share (
                <strong className="text-white">"process"</strong>) your
                information when you use our services (
                <strong className="text-white">"Services"</strong>), such as
                when you:
              </p>
              <p>
                * Visit our website at razorwallet.xyz, or any website/software
                of ours that links to this privacy notice
              </p>
              <p className="mb-4">
                * Engage with us in other related ways, including any sales,
                marketing, or events
              </p>
              <p className="mb-8">
                <strong className="text-white">Questions or concerns?</strong>{' '}
                Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us on
                Discord, Twitter or Telegram.
              </p>
              <h2 className="text-white font-bold mb-5">
                SUMMARY OF KEY POINTS
              </h2>
              <p className="mb-4">
                <i>
                  This summary provides key points from our privacy notice, but
                  you can find out more details about any of these topics by
                  clicking the link following each key point.
                </i>
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  What personal information do we process?
                </strong>{' '}
                We do not transmit your data to our server. When you visit, use,
                or navigate our Services, we may process personal information
                depending on how you interact with Razor Labs, Inc, the data
                left on your device. and the Services, the choices you make, and
                the products and features you use.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  Do we process any sensitive personal information?
                </strong>{' '}
                We do not process sensitive personal information.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  Do we receive any information from third parties?
                </strong>{' '}
                We do not receive any information from third parties.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  How do we process your information?
                </strong>{' '}
                We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  In what situations and with which parties do we share personal
                  information?{' '}
                </strong>
                We may share information in specific situations and with
                specific third parties.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  How do we keep your information safe?
                </strong>{' '}
                We have organizational and technical processes and procedures in
                place to protect your personal information. However, no
                electronic transmission over the internet or information storage
                technology can be guaranteed to be 100% secure, so we cannot
                promise or guarantee that hackers, cybercriminals, or other
                unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information
              </p>
              <p className="mb-4">
                <strong className="text-white">What are your rights?</strong>{' '}
                Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights
                regarding your personal information.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
