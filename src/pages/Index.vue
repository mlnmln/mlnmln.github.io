<template>
  <Layout>
    <div>
      <div>
        <main class="Text">
          <div>
            <h2>About</h2>

            <p>
              I work in web technology since the early 2000s, ranging from
              visual design to software architecture. I currently build web
              applications and facilitate the creative process at
              <a href="https://factorial.io">Factorial</a>.
            </p>
          </div>

          <div>
            <h2>Engagements</h2>

            <card
              v-for="edge in $page.engagements.edges"
              :key="edge.node.id"
              :title="edge.node.title"
              :description="edge.node.clients.join(', ')"
              :location="
                `${edge.node.company ? edge.node.company + ', ' : ''}${
                  edge.node.role ? edge.node.role + ', ' : ''
                } ${edge.node.startDate} – ${edge.node.endDate}`
              "
            ></card>
          </div>

          <div>
            <h2>Speaking</h2>
            <p>
              I speak occasionally at company events, meetups, barcamps etc.
            </p>

            <card
              v-for="edge in $page.presentations.edges"
              v-bind="edge.node"
              :key="edge.node.id"
            ></card>
          </div>

          <div>
            <h2>Contact</h2>

            <address>
              <small>
                <a href="https://twitter.com/mlnmln">twitter.com/mlnmln</a>
                <br />
                <a href="https://github.com/mlnmln">github.com/mlnmln</a> <br />
                <a href="mailto:inbox@milanmatull.com">inbox@milanmatull.com</a>
              </small>
            </address>
          </div>

          <div>
            <h2>Imprint</h2>

            <address>
              <small>
                Milan Matull<br />
                c/o Factorial GmbH<br />
                Kirchentwiete 37-39<br />
                22765 Hamburg<br />
              </small>
            </address>
          </div>
        </main>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  presentations: allPresentations {
    edges {
      node {
        id,
        title,
        url,
        description,
        location
      }
    }
  }
  engagements: allEngagements {
    edges {
      node {
        id,
        title,
        role,
        clients,
        company,
        startDate,
        endDate
      }
    }
  }
}

</page-query>

<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card,
  },
  metaInfo: {
    title: "Hello",
  },
};
</script>
