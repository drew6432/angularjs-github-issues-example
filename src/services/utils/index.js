import { each } from 'lodash';
import config from '../../config/config';
export function parseLinkHeader(header, currentPage, currUrl) {
    if (header.length == 0) {
      throw new Error("input must not be of zero length");
    }
  
    // Split parts by comma
    var parts = header.split(',');
    var links = {};
    // Parse each part into a named link
    each(parts, function(p) {
      var section = p.split(';');
      if (section.length != 2) {
        throw new Error("section could not be split on ';'");
      }
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = { url, pageNum: url.split('=')[2]};
    });

    links.current = {
      url: `${config.GITHUB_URL}${currUrl}`,
      pageNum: currentPage
    }
  
    return links;
  }