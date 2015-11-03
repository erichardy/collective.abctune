# ============================================================================
# DEXTERITY ROBOT TESTS
# ============================================================================
#
# Run this robot test stand-alone:
#
#  $ bin/test -s collective.abctune -t test_abctune.robot --all
#
# Run this robot test with robot server (which is faster):
#
# 1) Start robot server:
#
# $ bin/robot-server --reload-path src collective.abctune.testing.COLLECTIVE_ABCTUNE_ACCEPTANCE_TESTING
#
# 2) Run robot tests:
#
# $ bin/robot src/plonetraining/testing/tests/robot/test_abctune.robot
#
# See the http://docs.plone.org for further details (search for robot
# framework).
#
# ============================================================================

*** Settings *****************************************************************

Resource  plone/app/robotframework/selenium.robot
Resource  plone/app/robotframework/keywords.robot

Library  Remote  ${PLONE_URL}/RobotRemote

Test Setup  Open test browser
Test Teardown  Close all browsers


*** Test Cases ***************************************************************

Scenario: As a site administrator I can add a abctune
  Given a logged-in site administrator
    and an add abctune form
   When I type 'My abctune' into the title field
    and I submit the form
   Then a abctune with the title 'My abctune' has been created

Scenario: As a site administrator I can view a abctune
  Given a logged-in site administrator
    and a abctune 'My abctune'
   When I go to the abctune view
   Then I can see the abctune title 'My abctune'


*** Keywords *****************************************************************

# --- Given ------------------------------------------------------------------

a logged-in site administrator
  Enable autologin as  Site Administrator

an add abctune form
  Go To  ${PLONE_URL}/++add++abctune

a abctune 'My abctune'
  Create content  type=abctune  id=my-abctune  title=My abctune


# --- WHEN -------------------------------------------------------------------

I type '${title}' into the title field
  Input Text  name=form.widgets.title  ${title}

I submit the form
  Click Button  Save

I go to the abctune view
  Go To  ${PLONE_URL}/my-abctune
  Wait until page contains  Site Map


# --- THEN -------------------------------------------------------------------

a abctune with the title '${title}' has been created
  Wait until page contains  Site Map
  Page should contain  ${title}
  Page should contain  Item created

I can see the abctune title '${title}'
  Wait until page contains  Site Map
  Page should contain  ${title}
