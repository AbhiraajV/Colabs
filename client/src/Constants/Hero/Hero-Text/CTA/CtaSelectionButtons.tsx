import React, { ReactElement } from "react";
import BorderAnimatedButton from "../../../../Constants/Buttons/BorderAnimatedButton";

interface Props {
  curSelection: {
    newsletter: boolean;
    contribute: boolean;
  };
  setCurrentSelection: React.Dispatch<
    React.SetStateAction<{
      newsletter: boolean;
      contribute: boolean;
    }>
  >;
}

function CtaSelectionButtons({
  curSelection,
  setCurrentSelection,
}: Props): ReactElement {
  return (
    <div className="btn-holder">
      <BorderAnimatedButton
        ContentText="Newsletter"
        selected={curSelection.newsletter}
        onClick={() =>
          setCurrentSelection({
            newsletter: true,
            contribute: false,
          })
        }
      />
      <BorderAnimatedButton
        ContentText="Contribute"
        selected={curSelection.contribute}
        onClick={() =>
          setCurrentSelection({
            newsletter: false,
            contribute: true,
          })
        }
      />
    </div>
  );
}

export default CtaSelectionButtons;
