import { Col, Row } from 'antd';

export default function AntiSpamPage() {
  return (
    <>
      <Row className="bg-white lg:px-0 px-6" gutter={[10, 2]}>
        {/* We Set You Up */}
        <Col md={3} xs={24} sm={24}></Col>
        <Col md={18} xs={24} sm={24}>
          <h1 className="lg:text-[40px] text-[32px] font-[800] text-center mt-6 lg:mb-8 mb-2">
            Anti Spam Policy
          </h1>
          <div className="text-[16px] font-normal text-center text-[#7A7A7A] lg:mt-8 mt-3">
            <p>
              Newsletter Ready Ltd is committed to abiding by Government
              legislated anti-spam laws – this means, we adhere to all
              regulations.
            </p>
            <p className="mt-3 mb-8">
              In plain everyday language, the Unsolicited Emails and Unsolicited
              Electronic Messages Act says the following.
            </p>
          </div>
          <hr />
          <div>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-8">
              <p>
                It is important to note the Customer Newsletter is a commercial
                information communication piece and not a sales offering.
                Because it is a communication offering information to the
                Customer it largely falls outside of laws governing spam.
              </p>
              <p className="mt-3">
                The following extracts have been obtained from the Government
                public awareness site www.dia.govt.nz.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[19px] font-semibold mt-6">
              Three steps to ensure you are not spamming
            </p>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-3">
              <p>Follow the steps below to ensure you are not sending spam:</p>
            </div>
          </div>
          <div>
            <p className="text-[19px] font-semibold mt-6">Step one – consent</p>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-3">
              <p>
                Commercial messages must be sent only when you have express
                consent, inferred consent, or deemed consent.
              </p>
              <p className="mt-3">
                Express consent is a direct indication from the person you wish
                to contact that it is okay to send the message(s). Inferred
                consent is when the person you wish to contact has not directly
                instructed you to send them a message, but it is still clear
                that there is a reasonable expectation that messages will be
                sent. For example, the address-holder provided their email
                address when purchasing goods and services in the general
                expectation that there will be follow-up communication.
              </p>
              <p>
                Deemed consent is when someone conspicuously publishes their
                work-related electronic address (e.g. on a website, brochure or
                magazine). However, if a publication includes a statement that
                the person does not want to receive unsolicited commercial
                electronic messages at that address, consent cannot be deemed.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[19px] font-semibold mt-6">
              Step two – identify
            </p>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-3">
              <p>
                Commercial messages must always clearly identify the business
                responsible for sending the message and how they can be
                contacted.
              </p>
              <p className="mt-3">
                Sometimes you might use another organization, a third party, to
                send commercial electronic messages on your behalf. This third
                party must include accurate information about your business,
                i.e. name and contact details.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[19px] font-semibold mt-6">
              Step three – unsubscribe
            </p>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-3">
              <p>
                Commercial messages must contain a functioning unsubscribe
                facility, allowing people to state that commercial messages
                should not be sent to them in the future.
              </p>
              <p className="mt-3">
                It needs to be clearly presented, easy to use and free of
                charge. It could be as simple as a line in your message saying,
                ‘If you do not wish to receive future messages, send a reply
                with UNSUBSCRIBE’ in the subject line
              </p>
              <p className="mt-3 mb-8">
                Newsletter Ready Ltd is committed to abiding by Government
                legislated spam laws – this means, we adhere to all regulations.
              </p>
            </div>
          </div>
        </Col>
        <Col md={3} xs={24} sm={24}></Col>
      </Row>
    </>
  );
}
