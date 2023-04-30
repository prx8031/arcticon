import React,{useState} from 'react';
import reactDom from 'react-dom';
import {HelloWorld, InputBox, Button, Card, Dropdown, Modal, Navbar, ProgressBar, Slider, ToggleSwitch} from "./lib";



const App = () => {
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect= (option) => {
    setSelectedOption(option);
    };
//modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //slider
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  //toggle
  const [isOn, setIsOn] = useState(false);

  const handleToggleChange = (newValue) => {
    setIsOn(newValue);
  };
  return(
    <div>
 <Navbar
        title="My Website"
        links={[
          { title: "Home", url: "#" },
          { title: "About", url: "#" },
          { title: "Contact", url: "#" }
        ]}
        className="my-navbar-class"
        style={{ backgroundColor: "white" }}
      />
<br/>
<ProgressBar percent={59} color="#6c757d" height="1rem" style={{ marginTop: '2rem' }} />
<br/>

<Slider
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
        style={{ maxWidth: '500px', margin: '0 auto' }}
      />

<br/>

<ToggleSwitch
        checked={isOn}
        onChange={handleToggleChange}
        style={{ margin: '0 auto' }}
      />
<div className="container mt-5">
      <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Modal title="Example Modal" isOpen={isModalOpen} onClose={handleModalClose}>
        <p>Modal content goes here</p>
      </Modal>
    </div>

      <br/>
<Dropdown
     label="Select an option"
     options={options}
     onSelect={handleOptionSelect}
     selectedOption={selectedOption}
   />
{selectedOption && <p>You selected option {selectedOption.label}</p>}
      <HelloWorld />
      <InputBox />
      <Button label="Click me!" onClick={() => console.log('Button clicked')} /><br/>
      <Card
      title="Example Card"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus metus non ipsum malesuada consectetur."
      image="https://via.placeholder.com/150"
    />

    </div>
  )
}
reactDom.render(<App/>, document.getElementById("root"));
