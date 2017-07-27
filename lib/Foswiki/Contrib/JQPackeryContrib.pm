# Extension for Foswiki - The Free and Open Source Wiki, http://foswiki.org/
#
# JQPackeryContrib is Copyright (C) 2016 Michael Daum http://michaeldaumconsulting.com
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details, published at
# http://www.gnu.org/copyleft/gpl.html

package Foswiki::Contrib::JQPackeryContrib;

use strict;
use warnings;

use Foswiki::Func ();

our $VERSION = '0.02';
our $RELEASE = '24 Nov 2016';
our $SHORTDESCRIPTION = 'Gapless, draggable grid layouts';
our $NO_PREFS_IN_TOPIC = 1;

sub init {
  require Foswiki::Plugins::JQueryPlugin;
  Foswiki::Plugins::JQueryPlugin::registerPlugin("JQPackeryContrib", "Foswiki::Contrib::JQPackeryContrib::Core");
}

1;
