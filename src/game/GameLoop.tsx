import React, { useEffect, useState } from 'react';

class GameLoop {

  nextTick(): ActionLog {
    /**
     * Pick a random array item.
     * https://stackoverflow.com/a/23976260/249218
     */
    const possibleActionTypes = ['roaming', 'looting'];
    // const randomIndex = ~~(possibleActionTypes.length * Math.random());
    const randomIndex = Math.floor(Math.random() * possibleActionTypes.length);
    // console.log('randomIndex:', randomIndex)
    const randomActionType = possibleActionTypes[randomIndex];
    let randomAction;
    switch (randomActionType) {
      case 'roaming':
        randomAction = new Roaming();
        break;
      case 'looting':
        randomAction = new Looting();
        break;
      default:
        randomAction = new Action();
    }
    const actionLog = randomAction.perform();
    return actionLog;
  }
}

type ActionLog = {
  message: string;
}


class Action {
  // TODO: Common logic?
  perform(){
    const message = 'Action: TODO';
    console.log(message)
    return {
      message,
    };
  }
}

class Roaming extends Action {
  perform(): ActionLog {
    const message = 'You adventure for a bit.';
    return {
      message,
    };
  }
}

class Looting {
  perform() {
    const message = 'You loot a corpse on the ground.';
    return {
      message,
    }
  }
}

const gameLoop = new GameLoop();
function ActionLogView() {
  const [actionLogs, setActionLogs] = useState([{ message: 'You step into the world.'}] as ActionLog[]);

  useEffect(() => {
    console.log("Running the useEffect to start runGameLoop");
    setTimeout(() => {
      console.log("Running the nextTick of the gameLoop!");
      const actionLog = gameLoop.nextTick();
      const newActionLogs = [
        actionLog,
        ...actionLogs,
      ]
      setActionLogs(newActionLogs);
    }, 2500)
  }, [actionLogs]);

  return (
    <section className="ActionLogs">
      {actionLogs.map((actionLog, index) => (
        <div className="ActionLogs-ActionLog" key={index}>
          <p>{actionLog.message}</p>
        </div>
      ))}
    </section>
  );
}

export { ActionLogView };