import moment from 'moment';
//===================================
//--Get Visible services
//--This is our "filters" function.
//--It takes in the filter redux state and returns
//--the services that match
//===================================
export default (services = [], { text, carFilterId = '', sortBy, startDate, endDate }) => {
  //-------------------------------------------
  //--Filter all of the services based on the filters passed in
  //--The filter functions expects a true or a false to determine if it should include (true)
  //--or exclude (false) the record from the return array.
  //-------------------------------------------
  return services.filter((service) => {
    //-Take the Unix createAt date and conver to a moment object (easier to deal with.)
    const serviceDateMoment = moment(service.serviceDate);

    //-Check CarId in service for match
    const carMatch = service.carId === carFilterId || carFilterId === '';
    //-Check is text in filter is included in description
    const textMatch = service.serviceDescription.toLowerCase().includes(text.toLowerCase());
    //-Check the if the startDate is <= to createdAt
    const startDateMatch = startDate ? startDate.isSameOrBefore(serviceDateMoment, 'day') : true;
    //-Check the if the endDate is >= to createdAt
    const endDateMatch = endDate ? endDate.isSameOrAfter(serviceDateMoment, 'day') : true;

    //only return true (i.e. include in output) if all match criteria are met
    return carMatch && textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.serviceDate < b.serviceDate ? 1 : -1;
    }
    return a.serviceCost < b.serviceCost ? 1 : -1;
  });
};
