import { Col, Row } from 'antd';

const HowItWorks = () => {
  return (
    <>
      <div className="bg-white lg:px-0 px-6">
        <h1 className="text-5xl text-center lg:font-[800] font-[700] mt-10 ">How it works</h1>
        <Row gutter={[10, 2]} className="!ml-0 !mr-0">
          {/* We Set You Up */}
          <Col md={3} xs={24} sm={12}></Col>
          <Col md={9} xs={24} sm={12}></Col>
          <Col md={9} xs={24} sm={12}>
            <p className="text-[13px] text-[#4dbfbf] font-semibold mt-8">
              Step #01
            </p>
            <h1 className="text-[36px] font-bold">We Set You Up</h1>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-2">
              <p>
                Firstly, we’ll get to know you and your business, and the
                industry you’re in.
              </p>
              <p className="my-4">
                We’ll understand who your client base is and what interests
                them.
              </p>
              <p>
                Next, we’ll create a newsletter template for you, with your
                brand, logo and colours. This is how your newsletters will look
                each month.
              </p>
              <p className="my-4">
                We’ll import your client database into our secure system,
                tidying it up along the way. We can even supply a “newsletter
                sign-up” template for your website.
              </p>

              <p className="mb-5">
                Now you’re all set up, you can meet your dedicated Content
                Manager, and we can get started on creating your first
                newsletter to send to your clients.
              </p>
            </div>
          </Col>
          <Col md={2} xs={24} sm={12}></Col>
          {/* We Create Your Monthly Newsletter */}
          <Col md={3} xs={24} sm={12}></Col>
          <Col md={9} xs={24} sm={12}>
            <p className="text-[13px] text-[#4dbfbf] font-semibold mt-8">
              Step #02
            </p>
            <h1 className="text-[36px] font-bold">
              We Create Your Monthly Newsletter
            </h1>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-2">
              <p>
                Your dedicated Content Manager will draft your newsletter, using
                your customised template.
              </p>
              <p className="my-4">
                It’ll have a personalised introduction, and the first article
                will relate to your business. The other three articles will
                relate to your industry and/or community, and will be
                interesting and informative.
              </p>
              <p>
                We send you the draft. You check it, and reply with anything
                you’d like changed – perhaps you have a special deal you’d like
                us to promote, or a new team-member you’d like to introduce –
                just send us the details, and we’ll write a story and swap out
                one of the articles.
              </p>
              <p className="mt-4 mb-8">
                Once you see and approve the changes and edits you’ve requested,
                you tell us “Newsletter Ready” – we click ‘send” – and it’s
                done!
              </p>
            </div>
          </Col>
          <Col md={9} xs={24} sm={12}></Col>
          <Col md={3} xs={24} sm={12}></Col>
          {/* We send you a report */}
          <Col md={3} xs={24} sm={12}></Col>
          <Col md={9} xs={24} sm={12}></Col>
          <Col md={9} xs={24} sm={12}>
            <p className="text-[13px] text-[#4dbfbf] font-semibold mt-8">
              Step #03
            </p>
            <h1 className="text-[36px] font-bold">We send you a report</h1>
            <div className="text-[16px] font-normal text-[#7A7A7A] mt-2">
              <p className="mt-4 mb-12">
                Five days after the campaign is sent, you receive a
                comprehensive report, so you can observe the key metrics – who
                opened it, who read it, who unsubscribed – you get the data.
                Remember, you’re not locked in to a minimum term, and can cancel
                at any time.
              </p>
            </div>
          </Col>
          <Col md={3} xs={24} sm={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default HowItWorks;
