// Copyright (c) 2022 Microsoft Corporation
// Copyright (c) 2023 Marc Lichtman
// Licensed under the MIT License

import { SigPlot, ArrayLayer } from 'react-sigplot';
import React, { useEffect, useState } from 'react';
import { template } from '../../Utils/plotlyTemplate';

export const TimePlot = (props) => {
  let { currentSamples } = props;
  const [I, setI] = useState();
  const [Q, setQ] = useState();

  useEffect(() => {
    if (currentSamples && currentSamples.length > 0) {
      setI(
        currentSamples.filter((element, index) => {
          return index % 2 === 0;
        })
      );

      setQ(
        currentSamples.filter((element, index) => {
          return index % 2 === 1;
        })
      );
    }
  }, [currentSamples]); // TODO make sure this isnt going to be sluggish when currentSamples is huge

  if (!props.cursorsEnabled) {
    return (
      <div>
        <p>Please enable cursors first</p>
      </div>
    );
  }

  return (
    <div>
      <SigPlot width="700px" height="600px" options={{noreadout: true, all:true}}>
          <ArrayLayer data={I}/>
          <ArrayLayer data={Q}/>
      </SigPlot>
    </div>
  );
};
