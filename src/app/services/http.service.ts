import { Injectable } from '@angular/core';
import { 
  HttpResponse,
  HttpProgressEvent,
  HttpHeaderResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pokemon {
  name: string,
  id: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  savePrivacySettings(shareSettings:any):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    console.log('HttpService', shareSettings);

    return new Observable(observer => {
      observer.next(new HttpResponse<any>({body: {}, status: 200}));
      observer.complete();
    });
  }

  async fetchGraphQL(query:string, variables:any, operationName:any) {
    const result = await fetch(
      "https://beta.pokeapi.co/graphql/v1beta",
      {
        method: "POST",
        body: JSON.stringify({
          query: query,
          variables: variables,
          operationName: operationName
        })
      }
    )

    return await result.json()
  }

  async fetchParty(id:Number|Array<Number> = 10): Promise<Array<Pokemon>> {
    const query = `
      query pokemon_details($id: [Int!]) {
        species: pokemon_v2_pokemonspecies(where: {id: {_in: $id}}) {
          id
          name
        }
      }
    `

    const { data } = await this.fetchGraphQL(
      query,
      {"id": id},
      "pokemon_details"
    )
    return data.species.map(addImage);
  }

  async fetchPokemon_details(name="starmie"): Promise<Array<Pokemon>> {
    const query = `
      query pokemon_details($name: String) {
        species: pokemon_v2_pokemonspecies(where: {name: {_iregex: $name}}) {
          name
          id
        }
      }
    `

    const { data } = await this.fetchGraphQL(
      query,
      {"name": name},
      "pokemon_details"
    )
    return data.species.map(addImage);
  }

}

const addImage = (p: { name: string; id: number; }): Pokemon => 
  Object.assign(p, {image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`})
