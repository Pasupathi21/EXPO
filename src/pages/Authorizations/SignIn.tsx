import React, { memo } from "react";

// Component *********************
import {
  ContainerWrapper,
  PaperContainerV2,
  ContainerBoxV2,
} from "../../components/MUI/mui.index";

function SignIn() {
  return (
    <ContainerWrapper>
      <ContainerBoxV2
        styles={{
          width: "inherit",
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PaperContainerV2
          styles={{
            padding: '0%',
            display: "flex",
            height: "65%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 15
          }}
        >
          <>SignIn 👍👍👍👍</>
        </PaperContainerV2>
      </ContainerBoxV2>
    </ContainerWrapper>
  );
}

export default memo(SignIn);
