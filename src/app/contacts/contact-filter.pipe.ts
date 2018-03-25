import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0){
      return value
    }
    const resultArray = []
    for (const item of value){
      if (item.first_name.includes(filterString) ||
          item.last_name.includes(filterString) ||
          item.organization.includes(filterString)
    ){
        resultArray.push(item)
      }
    }//for
    return resultArray;
  }//transform

}
