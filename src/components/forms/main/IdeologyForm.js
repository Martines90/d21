/*Example of Expandable ListView in React Native*/
import React from 'react'
//import react in our project
import { Text, View } from 'react-native'

import RowSpace from '~mobile/components/separators/Space'

import CustomListView from '~mobile/components/lists/CustomListView'
import { I_TEXTS } from '../../../translation'
import StaticList from '../../listItems/StaticList'
import Hyperlink from 'react-native-hyperlink'

const ContentTextBlock = (props) => {
  return (
    <>
      <RowSpace />
      <Text>{props.children}</Text>
    </>
  )
}

const ContenBlock = (props) => {
  return (
    <>
      <RowSpace />
      {props.children}
    </>
  )
}

const IdeologyForm = () => {
  console.log(I_TEXTS.theGoalOfOurMovement.intro)

  const listItems = [
    {
      title: I_TEXTS.theGoalOfOurMovement.title,
      status: 'open',
      listItems: [
        {
          content: (
            <View>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.intro}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.whatTheFrameworkGoodFor}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.rethinkOfVotingIntro}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.problemWithVoting}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.crowdEasyToBeManipulated}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.newSystemWillBeMoreProfessionnal}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.ciitizenCanVoteLike}
              </ContentTextBlock>
              <ContentTextBlock>
                <StaticList
                  items={[
                    {
                      key: 'readTheDescriptionOfTheTopic',
                      text:
                        I_TEXTS.theGoalOfOurMovement.minRequirementsToVote
                          .readTheDescriptionOfTheTopic,
                    },
                    {
                      key: 'readOneProAndOneConExpertArticle',
                      text:
                        I_TEXTS.theGoalOfOurMovement.minRequirementsToVote
                          .readOneProAndOneConExpertArticle,
                    },
                  ]}
                />
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.wayOfArticleReadByCitizenCheck}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.theGoalOfOurMovement
                    .extraWaysTOIncreaseTheValueOfYourVote
                }
              </ContentTextBlock>
              <ContentTextBlock>
                <StaticList
                  items={[
                    {
                      key: 'readTheDescriptionOfTheTopic',
                      text:
                        I_TEXTS.theGoalOfOurMovement
                          .extraWaysTOIncreaseTheValueOfYourVoteAre
                          .readMoreExpertArticle,
                    },
                    {
                      key: 'readOneProAndOneConExpertArticle',
                      text:
                        I_TEXTS.theGoalOfOurMovement
                          .extraWaysTOIncreaseTheValueOfYourVoteAre
                          .readCriticalReactionOnExpertArticlesArticles,
                    },
                    {
                      key: 'readOneProAndOneConExpertArticle',
                      text:
                        I_TEXTS.theGoalOfOurMovement
                          .extraWaysTOIncreaseTheValueOfYourVoteAre
                          .readAttechedContentAboutTheVotingTopic,
                    },
                  ]}
                />
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.moreExtraVoteValueIncreaseFactors}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.theGoalOfOurMovement
                    .theFormulaHowYourVoteValueCalculated
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.votingValueCalcedFormula}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.theGoalOfOurMovement
                    .noteAboutExpertArticlesAndOtherContents
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.theReasonWhyThisConceptIsSoStrong}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.theGoalOfOurMovement
                    .whatTheFramworkExpectsAsTheRecepieOfItsSuccess
                }
              </ContentTextBlock>
              <ContenBlock>
                <>
                  <Text>
                    {I_TEXTS.theGoalOfOurMovement.downloadSpecText.pt1}
                  </Text>
                  <Hyperlink onPress={() => setQrCodeScannerActive(true)}>
                    <Text style={{ color: 'blue' }}>
                      {I_TEXTS.theGoalOfOurMovement.downloadSpecText.linkText}
                    </Text>
                  </Hyperlink>
                  <Text>
                    {I_TEXTS.theGoalOfOurMovement.downloadSpecText.pt2}
                  </Text>
                </>
              </ContenBlock>
              <ContentTextBlock>
                {I_TEXTS.theGoalOfOurMovement.lastComment}
              </ContentTextBlock>
            </View>
          ),
        },
      ],
    },
    {
      title: I_TEXTS.theWeightOfTheStake.title,
      status: 'open',
      listItems: [
        {
          content: (
            <View>
              <ContentTextBlock>
                {I_TEXTS.theWeightOfTheStake.theHiddenPotentialInThisFramework}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theWeightOfTheStake.whyWeHaveToPushThroughThis}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theWeightOfTheStake.sameCirclesTimeToTime}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.theWeightOfTheStake
                    .theBestPoliticanIsStillWouldNotBeGood
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theWeightOfTheStake.cantRelyOnWhatWeHaveNow}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theWeightOfTheStake.theStakeIs}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theWeightOfTheStake.paradigmChangeInThe21thCentury}
              </ContentTextBlock>
            </View>
          ),
        },
      ],
    },
    {
      title: I_TEXTS.theRoad.title,
      status: 'open',
      listItems: [
        {
          content: (
            <View>
              <ContentTextBlock>
                {I_TEXTS.theRoad.howDoWePushOurLeadersToMakeThisHappen}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theRoad.pressurizeTool}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theRoad.prewrittenScenariobook}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.theRoad
                    .theAppContainsTheScenariobookAndTheMessageToGov
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theRoad.howWeGonnaMakeItInPractice}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theRoad.whatGivesUsThePower}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theRoad.theMainMotivationToAct}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.theRoad.spreadTheIdeologyPersonally}
              </ContentTextBlock>
            </View>
          ),
        },
      ],
    },
    {
      title: I_TEXTS.yourRoleInTheMovement.title,
      status: 'open',
      listItems: [
        {
          content: (
            <View>
              <ContentTextBlock>
                {I_TEXTS.yourRoleInTheMovement.peopleWhoMasterTheIdeology}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.yourRoleInTheMovement.yourRoleToMakePeopleAchieveThis}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.yourRoleInTheMovement
                    .theBattleIsOngoingAtIntellectualLevel
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.yourRoleInTheMovement
                    .weHaveToMakePeopleRecogniseWhatIsDemocracyToday
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.yourRoleInTheMovement.theGameIsRigged}
              </ContentTextBlock>
              <ContentTextBlock>
                {
                  I_TEXTS.yourRoleInTheMovement
                    .yourRoleIsMakePeopleUnderstandWhatTheyAreLivingInAndWhatIsTheSolution
                }
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.yourRoleInTheMovement.educateAndTrainYourself}
              </ContentTextBlock>
              <ContentTextBlock>
                {I_TEXTS.yourRoleInTheMovement.afterThisStartInfluencePeople}
              </ContentTextBlock>
            </View>
          ),
        },
      ],
    },
  ]

  return <CustomListView listItems={listItems} />
}

export default IdeologyForm
