import Form from 'react-bootstrap/Form';

function FormFileExample() {
  return (
    <div className='evaluation-container'>
    <h1>Online Evaluations</h1>
    <h3>Upload your video to be evaluated by Coach Corey</h3>
    <div className='evaluation-information'>  
        <h4>In-Person</h4>
        <h4>Video Upload</h4>
            <p># Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum at repellat, nulla, ipsa eius beatae cupiditate neque impedit numquam sed eaque. Quis qui vero ullam amet nobis voluptates blanditiis.</p>
            <p>## Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facilis vel aut, odio odit nisi, deleniti doloremque, a consectetur eos eum nobis enim dolorem sed maiores in temporibus iste tempora.</p>
            
        <h5>How it works</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea quae quos, eaque aliquam perspiciatis impedit molestiae iste repudiandae dolore voluptatibus minus non facere voluptatum necessitatibus ducimus veritatis distinctio saepe!</p>
        <h5>What you get</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi delectus explicabo nam? Quas eius consectetur explicabo ex fuga illum tempora voluptate nobis labore sit rem voluptatum, laudantium culpa voluptatem dignissimos?</p>
        <h5>Pricing</h5>
            <p>1 video - $25</p>
        <h5>What you get</h5>
            <p>1. 10 minute video evaluation</p>
    </div>
    <div className='evaluation-form'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload your video</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload video</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Disabled file input example</Form.Label>
        <Form.Control type="file" disabled />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Upload small video option</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload large video option</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
    </div>
    </div> 
  );
}

export default FormFileExample;