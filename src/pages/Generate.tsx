import { useState } from "react";
import { Step, Icon } from "semantic-ui-react";

const Generate = () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <Step.Group>
            <Step active={currentStep === 1} disabled={currentStep > 1}>
                <Icon name="game" />
                <Step.Content>
                    <Step.Title>Game</Step.Title>
                    <Step.Description>Choose your target game</Step.Description>
                </Step.Content>
            </Step>

            <Step active={currentStep === 2} disabled={currentStep > 2}>
                <Icon name="info" />
                <Step.Content>
                    <Step.Title>Information</Step.Title>
                    <Step.Description>Enter basic map information</Step.Description>
                </Step.Content>
            </Step>

            <Step active={currentStep === 3} disabled={currentStep > 3}>
                <Icon name="map" />
                <Step.Content>
                    <Step.Title>Map</Step.Title>
                    <Step.Description>Select the map area</Step.Description>
                </Step.Content>
            </Step>
        </Step.Group>
    );
};

export default Generate;