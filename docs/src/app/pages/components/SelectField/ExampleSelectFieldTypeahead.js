import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'

const options = [
  {value: 'AF', display: 'Afghanistan'},
  {value: 'AL', display: 'Albania'},
  {value: 'DZ', display: 'Algeria'},
  {value: 'AS', display: 'American Samoa'},
  {value: 'AD', display: 'Andorra'},
  {value: 'AG', display: 'Angola'},
  {value: 'AI', display: 'Anguilla'},
  {value: 'AG', display: 'Antigua &amp; Barbuda'},
  {value: 'AR', display: 'Argentina'},
  {value: 'AA', display: 'Armenia'},
  {value: 'AW', display: 'Aruba'},
  {value: 'AU', display: 'Australia'},
  {value: 'AT', display: 'Austria'},
  {value: 'AZ', display: 'Azerbaijan'},
  {value: 'BS', display: 'Bahamas'},
  {value: 'BH', display: 'Bahrain'},
  {value: 'BD', display: 'Bangladesh'},
  {value: 'BB', display: 'Barbados'},
  {value: 'BY', display: 'Belarus'},
  {value: 'BE', display: 'Belgium'},
  {value: 'BZ', display: 'Belize'},
  {value: 'BJ', display: 'Benin'},
  {value: 'BM', display: 'Bermuda'},
  {value: 'BT', display: 'Bhutan'},
  {value: 'BO', display: 'Bolivia'},
  {value: 'BL', display: 'Bonaire'},
  {value: 'BA', display: 'Bosnia &amp; Herzegovina'},
  {value: 'BW', display: 'Botswana'},
  {value: 'BR', display: 'Brazil'},
  {value: 'BC', display: 'British Indian Ocean'},
  {value: 'BN', display: 'Brunei'},
  {value: 'BG', display: 'Bulgaria'},
  {value: 'BF', display: 'Burkina Faso'},
  {value: 'BI', display: 'Burundi'},
  {value: 'KH', display: 'Cambodia'},
  {value: 'CM', display: 'Cameroon'},
  {value: 'CA', display: 'Canada'},
  {value: 'IC', display: 'Canary Islands'},
  {value: 'CV', display: 'Cape Verde'},
  {value: 'KY', display: 'Cayman Islands'},
  {value: 'CF', display: 'Central African Republic'},
  {value: 'TD', display: 'Chad'},
  {value: 'CD', display: 'Channel Islands'},
  {value: 'CL', display: 'Chile'},
  {value: 'CN', display: 'China'},
  {value: 'CI', display: 'Christmas Island'},
  {value: 'CS', display: 'Cocos Island'},
  {value: 'CO', display: 'Colombia'},
  {value: 'CC', display: 'Comoros'},
  {value: 'CG', display: 'Congo'},
  {value: 'CK', display: 'Cook Islands'},
  {value: 'CR', display: 'Costa Rica'},
  {value: 'CT', display: 'Cote D\'Ivoire'}
]

const ExampleSelectFieldTypeahead = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display'
    value={null}/>
)

export default ExampleSelectFieldTypeahead
