import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Cities from './cities';


export const findOneCity = new ValidatedMethod({
  name: 'cities.findOne',
  validate: new SimpleSchema({
    name: { type: String, optional: false },
  }).validator(),
  run({name}) {
    return Cities.findOne({ name });
  },
});
