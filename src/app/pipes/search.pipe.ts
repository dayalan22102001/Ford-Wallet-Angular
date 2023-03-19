import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(objects: any[], query:any): any[] {
    
    console.log("query"+query);
    if (query == null || query == "")
      return objects;

    return objects.filter(
      (object) => {
        let objStr = JSON.stringify(object).toLowerCase();
        console.log(objStr);

        let queryRef = query.toLowerCase();
        console.log(query);
        console.log(objStr.indexOf(queryRef));

        JSON.stringify(objStr).toLowerCase().indexOf(query.toLowerCase()) >= 0 ? true:false
      }
    )
  }

}
