export interface ThermostatConfig {

  temperature_entity: string;

  low_entity: string;

  high_entity: string;

  switch_entity: string;

  min: number;

  max: number;

}
