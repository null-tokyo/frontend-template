/* debug */
import SiteSpeedChecker from './debug/SiteSpeedChecker';
import LongTaskChecker from './debug/LongTaskChecker';
new SiteSpeedChecker().getAll();
new LongTaskChecker().observe();
