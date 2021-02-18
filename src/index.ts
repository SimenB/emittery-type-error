import Emittery = require('emittery');

type Events = {
  foobar: string;
}

export class MyThing {
  private readonly eventEmitter = new Emittery<Events>();

  on = this.eventEmitter.on.bind(this.eventEmitter);
}
