import React from 'react';

import Form from 'react-bootstrap/Form';

function FormFileExample() {
  return (
    <div className='train-container'>
    <h1>TRAIN LIKE A CAVEMAN</h1>
    <br></br>
    <div className='evaluation-information'>  
        <h2>IN-PERSON TRAINING</h2>
            
        <h5>How it works</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea quae quos, eaque aliquam perspiciatis impedit molestiae iste repudiandae dolore voluptatibus minus non facere voluptatum necessitatibus ducimus veritatis distinctio saepe!</p>
        <h5>What you get</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi delectus explicabo nam? Quas eius consectetur explicabo ex fuga illum tempora voluptate nobis labore sit rem voluptatum, laudantium culpa voluptatem dignissimos?</p>
        <h5>Pricing</h5>
            <p>1 video - $25</p>
        <h5>What you get</h5>
            <p>1. 10 minute video evaluation</p>

            <br></br>
        <h2>VIRTUAL EVALUATION</h2>
        <h4>Video Upload</h4>

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
        <button type="submit">Submit</button>
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload video</Form.Label>
        <Form.Control type="file" multiple />
        <button type="submit">Submit</button>
      </Form.Group>
      
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload large video option</Form.Label>
        <Form.Control type="file" size="lg" />
        <button type="submit">Submit</button>
      </Form.Group>
    </div>
    </div> 
  );
}

export default FormFileExample;