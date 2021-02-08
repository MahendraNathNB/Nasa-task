export interface Astroid {
    astroid: {
      name: string,
      is_potentially_hazardous_asteroid: string,
      nasa_jpl_url: string
    }
  }
  
  
  export interface AstroidAction {
    type: string
    payload: Astroid
  } 

